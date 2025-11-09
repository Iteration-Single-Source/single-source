import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PublicProfile from './pages/PublicProfile';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div className='max-w-[750px] mx-auto'>
      <Header />
      <main className='p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path='/u/:username' element={<PublicProfile />} />
        </Routes>
      </main>
    </div>
  );
}
