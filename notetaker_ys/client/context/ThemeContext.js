
// // // context/ThemeContext.js

// import React, { createContext, useState } from 'react';
// import colors from '../screens/styles/colors/';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isLargeText, setIsLargeText] = useState(false);

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
//   const toggleLargeText = () => setIsLargeText(!isLargeText);

//   const theme = {
//     bgColor: isDarkMode ? colors.bg_darkmode : colors.bgColor,
//     textColor: isDarkMode ? colors.text_darkmode : colors.textColor,
//     cardColor: isDarkMode ? colors.card_darkmode : colors.cardColor,
//     btnColor: isDarkMode ? colors.btn_darkmode : colors.btnColor,
//     white: isDarkMode ? colors.bg_darkmode : colors.white,
//   };

//   const textSize = isLargeText ? 20 : 16;

//   return (
//     <ThemeContext.Provider value={{ theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

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
    white: isDarkMode ? colors.bg_darkmode : colors.white,
  };

  const textSize = isLargeText ? 20 : 16;

  return (
    <ThemeContext.Provider value={{ theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText }}>
      {children}
    </ThemeContext.Provider>
  );
};
