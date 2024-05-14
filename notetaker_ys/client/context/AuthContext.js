
// // client/context/AuthContext.js
// import React, { createContext, useState } from 'react';
// import { login as apiLogin, logout as apiLogout } from '../api';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     token: null,
//     user: null,
//   });

//   const login = async (username, password) => {
//     try {
//       const data = await apiLogin(username, password);
//       setAuthState({ token: data.token, user: data.user });
//       console.log('AuthContext: login successful', data);
//     } catch (err) {
//       console.error('AuthContext: login failed', err);
//     }
//   };

//   const logout = () => {
//     apiLogout();
//     setAuthState({ token: null, user: null });
//   };

//   return (
//     <AuthContext.Provider value={{ ...authState, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// client/context/AuthContext.js

import React, { createContext, useState } from 'react';
import { login as apiLogin, logout as apiLogout } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  const login = async (username, password) => {
    try {
      const data = await apiLogin(username, password);
      setAuthState({ token: data.token, user: data.user });
      console.log('AuthContext: login successful', data);
    } catch (err) {
      console.error('AuthContext: login failed', err);
    }
  };

  const logout = () => {
    apiLogout();
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
