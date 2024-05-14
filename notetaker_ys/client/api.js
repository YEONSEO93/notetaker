import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.1.100:3000/api';  // Use your local IP address here

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to include the JWT token in every request
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const signup = async (username, password, name, email) => {
  try {
    const response = await api.post('/auth/signup', { username, password, name, email });
    await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Sign up error:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const getDiaryEntries = async () => {
  const response = await api.get('/diary');
  return response.data;
};

export const createDiaryEntry = async (text) => {
  const response = await api.post('/diary', { text, createAt: new Date().toISOString() });
  return response.data;
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};
