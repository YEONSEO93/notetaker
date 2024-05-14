// // //api.js

// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_BASE_URL = 'http://192.168.1.100:3000/api';  // Change to your server IP

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// // Add a request interceptor to include the JWT token in every request
// api.interceptors.request.use(async (config) => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export const login = async (username, password) => {
//   const response = await api.post('/auth/login', { username, password });
//   return { token: response.data.token, user: response.data.user };
// };

// export const signup = async (username, password, name, email) => {
//   const response = await api.post('/auth/signup', { username, password, name, email });
//   return { token: response.data.token, user: response.data.user };
// };

// export const getDiaryEntries = async () => {
//   const response = await api.get('/diary');
//   return response.data;
// };

// export const createDiaryEntry = async (text) => {
//   const response = await api.post('/diary', { text, createdAt: new Date().toISOString() });
//   return response.data;
// };

// export const logout = async () => {
//   await AsyncStorage.removeItem('token');
//   await AsyncStorage.removeItem('user');
// };



import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.1.100:3000/api'; // replace with your server's IP and port

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

export const login = async (username, password) => {
  console.log('API: login initiated');
  const response = await api.post('/auth/login', { username, password });
  console.log('API: login successful', response.data);
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const signup = async (username, password, name, email) => {
  console.log('API: signup initiated');
  const response = await api.post('/auth/signup', { username, password, name, email });
  console.log('API: signup successful', response.data);
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
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

export const logout = async () => {
  console.log('API: logout initiated');
  await AsyncStorage.removeItem('token');
  console.log('API: logout successful');
};
