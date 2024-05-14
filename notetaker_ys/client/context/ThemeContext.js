// client/context/ThemeContext.js

import React, { createContext, useState } from 'react';
import colors from '../colors';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLargeText = () => setIsLargeText(!isLargeText);

  const theme = {
    bgColor: isDarkMode ? '#000' : colors.bgColor,
    textColor: isDarkMode ? '#fff' : colors.textColor,
    cardColor: isDarkMode ? '#333' : colors.cardColor,
    btnColor: colors.btnColor,
  };

  const textSize = isLargeText ? 20 : 16;

  return (
    <ThemeContext.Provider value={{ theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText }}>
      {children}
    </ThemeContext.Provider>
  );
};
