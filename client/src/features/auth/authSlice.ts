import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

const storedAuth = localStorage.getItem('auth');
let parsedAuth: AuthResponse | null = null;

if (storedAuth) {
  try {
    parsedAuth = JSON.parse(storedAuth) as AuthResponse;
  } catch (error) {
    console.error('Failed to parse auth from localStorage:', error);
    parsedAuth = null;
  }
}

interface InitialState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  user: parsedAuth ? parsedAuth.user : null,
  token: parsedAuth ? parsedAuth.token : null,
  isAuthenticated: parsedAuth ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },

    logOut(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
