

// // App.js
// import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import Navigator from "./navigator"; 

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Navigator />
//     </NavigationContainer>
//   );
// }


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';  // Ensure this import is correct
// import Navigator from './navigator';
// import { AuthProvider } from './context/AuthContext';

// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <Navigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }




// client/App.js

import React from 'react';
import Navigator from './navigator';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}
