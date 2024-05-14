//client/App.js
import React from 'react';
import Navigator from './navigator';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </AuthProvider>
  );
}

