// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as apiLogin, signup as apiSignup, logout as apiLogout } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const login = async (username, password) => {
    const data = await apiLogin(username, password);
    await AsyncStorage.setItem('token', data.token);
    await AsyncStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
  };

  const signup = async (username, password, name, email) => {
    const data = await apiSignup(username, password, name, email);
    await AsyncStorage.setItem('token', data.token);
    await AsyncStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
  };

  const logout = async () => {
    await apiLogout();
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
