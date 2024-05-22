
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.1.100:3000/api';  // Adjust to your server URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const signup = async (username, password, name, email) => {
  const response = await api.post('/auth/signup', { username, password, name, email });
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const getDiaryEntries = async (search = '') => {
  const response = await api.get('/diary', { params: { search } });
  return response.data;
};

export const createDiaryEntry = async (text) => {
  const response = await api.post('/diary', { text, createAt: new Date().toISOString() });
  return response.data;
};

export const updateDiaryEntry = async (id, text) => {
  const response = await api.put(`/diary/${id}`, { text });
  return response.data;
};

export const deleteDiaryEntry = async (id) => {
  const response = await api.delete(`/diary/${id}`);
  return response.data;
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};
