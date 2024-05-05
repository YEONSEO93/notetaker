// // context/ThemeContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isLargeText, setIsLargeText] = useState(false);

//   useEffect(() => {
//     const fetchSettings = async () => {
//       const darkModeSetting = await AsyncStorage.getItem('isDarkMode');
//       const largeTextSetting = await AsyncStorage.getItem('isLargeText');
//       setIsDarkMode(darkModeSetting === 'true');
//       setIsLargeText(largeTextSetting === 'true');
//     };

//     fetchSettings();
//   }, []);

//   const toggleDarkMode = async () => {
//     const newSetting = !isDarkMode;
//     await AsyncStorage.setItem('isDarkMode', String(newSetting));
//     setIsDarkMode(newSetting);
//   };

//   const toggleTextSize = async () => {
//     const newSetting = !isLargeText;
//     await AsyncStorage.setItem('isLargeText', String(newSetting));
//     setIsLargeText(newSetting);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, isLargeText, toggleDarkMode, toggleTextSize }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
