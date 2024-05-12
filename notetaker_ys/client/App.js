// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import Navigator from "./navigator";  // Make sure the import path matches the filename of your navigator setup

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Navigator />
//     </NavigationContainer>
//   );
// }


// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator"; 

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
