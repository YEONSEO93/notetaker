// // client/context/AuthContext.js

// import React, { createContext, useState, useEffect } from 'react';
// import { login, signup, logout } from '../api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadUser = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         // Optionally, verify token with the server or decode the token
//         setUser({ token });
//       }
//       setLoading(false);
//     };
//     loadUser();
//   }, []);

//   const loginHandler = async (username, password) => {
//     const data = await login(username, password);
//     setUser(data);
//   };

//   const signupHandler = async (username, password, name, email) => {
//     const data = await signup(username, password, name, email);
//     setUser(data);
//   };

//   const logoutHandler = async () => {
//     await logout();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login: loginHandler, signup: signupHandler, logout: logoutHandler }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




// // client/context/AuthContext.js

// import React, { createContext, useState, useEffect } from 'react';
// import { login, signup, logout } from '../api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadUser = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         // Optionally, verify token with the server or decode the token
//         setUser({ token });
//       }
//       setLoading(false);
//     };
//     loadUser();
//   }, []);

//   const loginHandler = async (username, password) => {
//     const data = await login(username, password);
//     setUser(data);
//   };

//   const signupHandler = async (username, password, name, email) => {
//     const data = await signup(username, password, name, email);
//     setUser(data);
//   };

//   const logoutHandler = async () => {
//     await logout();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login: loginHandler, signup: signupHandler, logout: logoutHandler }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// client/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import { login, signup, logout } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // Optionally, verify token with the server or decode the token
        setUser({ token });
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const loginHandler = async (username, password) => {
    const data = await login(username, password);
    setUser(data);
  };

  const signupHandler = async (username, password, name, email) => {
    const data = await signup(username, password, name, email);
    setUser(data);
  };

  const logoutHandler = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login: loginHandler, signup: signupHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};




