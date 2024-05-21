
// client/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.1.100:3000/api'; // Ensure this matches your server's IP and port

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
  console.log('API request error', error);
  return Promise.reject(error);
});

export const signup = async (username, password, name, email) => {
  try {
    const response = await api.post('/auth/signup', { username, password, name, email });
    await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Sign up failed');
  }
};

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error('Login failed');
  }
};

export const getDiaryEntries = async () => {
  console.log('API: getDiaryEntries initiated');
  const response = await api.get('/diary');
  console.log('API: getDiaryEntries successful', response.data);
  return response.data;
};

export const createDiaryEntry = async (text) => {
  console.log('API: createDiaryEntry initiated');
  const response = await api.post('/diary', { text, createAt: new Date().toISOString() });
  console.log('API: createDiaryEntry successful', response.data);
  return response.data;
};

export const updateDiaryEntry = async (id, text) => {
  console.log('API: updateDiaryEntry initiated');
  const response = await api.put(`/diary/${id}`, { text });
  console.log('API: updateDiaryEntry successful', response.data);
  return response.data;
};

export const deleteDiaryEntry = async (id) => {
  console.log('API: deleteDiaryEntry initiated');
  const response = await api.delete(`/diary/${id}`);
  console.log('API: deleteDiaryEntry successful', response.data);
  return response.data;
};

export const logout = async () => {
  console.log('API: logout initiated');
  await AsyncStorage.removeItem('token');
  console.log('API: logout successful');
};
