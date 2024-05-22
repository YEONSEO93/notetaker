
// context/ThemeContext.js
import React, { createContext, useState } from 'react';
import colors from '../screens/styles/colors/';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLargeText = () => setIsLargeText(!isLargeText);

  const theme = {
    bgColor: isDarkMode ? colors.bg_darkmode : colors.bgColor,
    textColor: isDarkMode ? colors.text_darkmode : colors.textColor,
    cardColor: isDarkMode ? colors.card_darkmode : colors.cardColor,
    btnColor: isDarkMode ? colors.btn_darkmode : colors.btnColor,
    inputBgColor: isDarkMode ? colors.input_bg_darkmode : colors.input_bg_lightmode,
    white: isDarkMode ? colors.bg_darkmode : colors.white,
    statusBarStyle: isDarkMode ? 'light' : 'dark',
    borderColor: isDarkMode ? colors.bgColor : colors.bg_darkmode,
    placeholderTextColor: isDarkMode ? colors.input_bg_lightmode : colors.input_bg_darkmode,



  };

  const textSize = isLargeText ? 20 : 15;

  return (
    <ThemeContext.Provider value={{ theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText }}>
      {children}
    </ThemeContext.Provider>
  );
};

