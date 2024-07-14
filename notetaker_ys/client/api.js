
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_BASE_URL = 'http://192.168.1.100:3000/api';

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// api.interceptors.request.use(async (config) => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export const signup = async (username, password, name, email) => {
//   try {
//     const response = await api.post('/auth/signup', { username, password, name, email });
//     await AsyncStorage.setItem('token', response.data.token);
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to sign up');
//   }
// };

// export const login = async (username, password) => {
//   try {
//     const response = await api.post('/auth/login', { username, password });
//     await AsyncStorage.setItem('token', response.data.token);
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to log in');
//   }
// };

// export const getDiaryEntries = async (search = '') => {
//   try {
//     const response = await api.get('/diary', { params: { search } });
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to fetch diary entries');
//   }
// };

// export const createDiaryEntry = async (text) => {
//   try {
//     const response = await api.post('/diary', { text, createAt: new Date().toISOString() });
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to create diary entry');
//   }
// };

// export const updateDiaryEntry = async (id, text) => {
//   try {
//     const response = await api.put(`/diary/${id}`, { text });
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to update diary entry');
//   }
// };

// export const deleteDiaryEntry = async (id) => {
//   try {
//     const response = await api.delete(`/diary/${id}`);
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to delete diary entry');
//   }
// };

// export const logout = async () => {
//   await AsyncStorage.removeItem('token');
// };



// api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.1.100:3000/api';

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
  try {
    const response = await api.post('/auth/signup', { username, password, name, email });
    await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (err) {
    throw new Error('Failed to sign up');
  }
};

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (err) {
    throw new Error('Failed to log in');
  }
};

export const getDiaryEntries = async () => {
  try {
    const response = await api.get('/diary');
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch diary entries');
  }
};

export const createDiaryEntry = async (text) => {
  try {
    const response = await api.post('/diary', { text, createAt: new Date().toISOString() });
    return response.data;
  } catch (err) {
    throw new Error('Failed to create diary entry');
  }
};

export const updateDiaryEntry = async (id, text) => {
  try {
    const response = await api.put(`/diary/${id}`, { text });
    return response.data;
  } catch (err) {
    throw new Error('Failed to update diary entry');
  }
};

export const deleteDiaryEntry = async (id) => {
  try {
    const response = await api.delete(`/diary/${id}`);
    return response.data;
  } catch (err) {
    throw new Error('Failed to delete diary entry');
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};
