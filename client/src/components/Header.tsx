import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../features/auth/authSlice';
import type { RootState } from '../app/store';

export default function Header() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div>
        <Link to='/' className='text-xl font-bold text-blue-600'>
          Single Source
        </Link>
      </div>
      <nav>
        {isAuthenticated ? (
          <div className='flex items-center space-x-4'>
            <span className='text-gray-700'>
              Welcome, {user?.username || 'User'}
            </span>
            <Link to='/dashboard' className='text-gray-600 hover:text-blue-600'>
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className='space-x-4'>
            <Link to='/login' className='text-gray-600 hover:text-blue-600'>
              Login
            </Link>
            <Link
              to='/register'
              className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded'
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
