
// context/AuthContext.js
import React, { createContext, useState } from 'react';
import { signup as apiSignup, login as apiLogin, logout as apiLogout } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  const signup = async (username, password, name, email) => {
    try {
      const data = await apiSignup(username, password, name, email);
      setAuthState({ token: data.token, user: data.user });
      console.log('AuthContext: sign up successful', data);
    } catch (err) {
      console.error('AuthContext: sign up failed', err);
      throw new Error(err.response?.data?.message || 'Sign up failed'); // Ensure an error is thrown with detailed message
    }
  };

  const login = async (username, password) => {
    try {
      const data = await apiLogin(username, password);
      setAuthState({ token: data.token, user: data.user });
      console.log('AuthContext: login successful', data);
    } catch (err) {
      console.error('AuthContext: login failed', err);
      throw new Error(err.response?.data?.message || 'Login failed'); // Ensure an error is thrown with detailed message
    }
  };

  const logout = () => {
    apiLogout();
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
