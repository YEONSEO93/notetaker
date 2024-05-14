
// // import React from "react";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import Home from "./screens/Home";
// // import Diary from "./screens/Diary";
// // import Setting from "./screens/Setting";
// // import { Ionicons } from "@expo/vector-icons";
// // import colors from "./colors";

// // const Tab = createBottomTabNavigator();

// // const CustomTabBarIcon = (name, size, color) => {
// //   return <Ionicons name={name} size={size} color={color} />;
// // };

// // const Navigator = () => (
// //   <Tab.Navigator
// //     screenOptions={({ route }) => ({
// //       tabBarIcon: ({ focused, color, size }) => {
// //         let iconName;
// //         if (route.name === 'Home') {
// //           iconName = 'planet-outline';
// //         } else if (route.name === 'Diary') {
// //           iconName = 'book-outline';
// //         } else if (route.name === 'Setting') {
// //           iconName = 'ellipsis-horizontal-outline';
// //         }

// //         // Use a ternary operator to change color if the tab is active
// //         const iconColor = focused ? colors.textColor : color;
// //         return CustomTabBarIcon(iconName, size, iconColor);
// //       },
// //       tabBarStyle: {
// //         backgroundColor: colors.bgColor // Use your global bgColor
// //       }
// //     })}
// //   >
// //     <Tab.Screen name="Home" component={Home} />
// //     <Tab.Screen name="Diary" component={Diary} />
// //     <Tab.Screen name="Setting" component={Setting} />
// //   </Tab.Navigator>
// // );

// // export default Navigator;



// // // basic navigation
// // import React from "react";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import Home from "./screens/Home";
// // import Write from "./screens/Write";

// // const Tabs = createNativeStackNavigator();

// // const Navigator = () => (
// //   <Tabs.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
// //     <Tabs.Screen name="Home" component={Home} />
// //     <Tabs.Screen name="Write" component={Write} />
// //   </Tabs.Navigator>
// // );

// // export default Navigator;




// // import React from "react";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { Ionicons } from "@expo/vector-icons";
// // import Home from "./screens/Home";
// // import Write from "./screens/Write";
// // import Diary from "./screens/Diary";
// // import Setting from "./screens/Setting";
// // import colors from "./colors";

// // const Stack = createNativeStackNavigator();
// // const Tab = createBottomTabNavigator();

// // const CustomTabBarIcon = (name, size, color) => {
// //   return <Ionicons name={name} size={size} color={color} />;
// // };

// // const TabNavigator = () => (
// //   <Tab.Navigator
// //     screenOptions={({ route }) => ({
// //       tabBarIcon: ({ focused, color, size }) => {
// //         let iconName;
// //         if (route.name === 'Home') {
// //           iconName = 'planet-outline';
// //         } else if (route.name === 'Diary') {
// //           iconName = 'book-outline';
// //         } else if (route.name === 'Setting') {
// //           iconName = 'ellipsis-horizontal-outline';
// //         }

// //         // Use a ternary operator to change color if the tab is active
// //         const iconColor = focused ? colors.textColor : color;
// //         return CustomTabBarIcon(iconName, size, iconColor);
// //       },
// //       tabBarStyle: {
// //         backgroundColor: colors.bgColor // Use your global bgColor
// //       }
// //     })}
// //   >
// //     <Tab.Screen name="Home" component={Home} />
// //     <Tab.Screen name="Diary" component={Diary} />
// //     <Tab.Screen name="Setting" component={Setting} />
// //   </Tab.Navigator>
// // );

// // const Navigator = () => (
// //   <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
// //     <Stack.Screen name="Tabs" component={TabNavigator} />
// //     <Stack.Screen name="Write" component={Write} />
// //   </Stack.Navigator>
// // );

// // export default Navigator;




// import React from "react";
// import { StatusBar } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import Home from "./screens/Home";
// import Write from "./screens/Write";
// import Diary from "./screens/Diary";
// import Setting from "./screens/Setting";
// import colors from "./colors";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const CustomTabBarIcon = (name, size, color) => {
//   return <Ionicons name={name} size={size} color={color} />;
// };

// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         if (route.name === 'Home') {
//           iconName = 'planet-outline';
//         } else if (route.name === 'Diary') {
//           iconName = 'book-outline';
//         } else if (route.name === 'Setting') {
//           iconName = 'ellipsis-horizontal-outline';
//         }

//         // Use a ternary operator to change color if the tab is active
//         const iconColor = focused ? colors.textColor : color;
//         return CustomTabBarIcon(iconName, size, iconColor);
//       },
//       tabBarStyle: {
//         backgroundColor: colors.bgColor // Use your global bgColor
//       }
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Diary" component={Diary} />
//     <Tab.Screen name="Setting" component={Setting} />
//   </Tab.Navigator>
// );

// const Navigator = () => (
//   <>
//     <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
//     <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
//       <Stack.Screen name="Tabs" component={TabNavigator} />
//       <Stack.Screen name="Write" component={Write} />
//     </Stack.Navigator>
//   </>
// );


// export default Navigator;




// // navigator.js
// import React from "react";
// import { StatusBar } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import Home from "./screens/Home";
// import Write from "./screens/Write";
// import Diary from "./screens/Diary";
// import Setting from "./screens/Setting";
// import LoginScreen from "./screens/LoginScreen";
// import colors from "./colors";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const CustomTabBarIcon = (name, size, color) => {
//   return <Ionicons name={name} size={size} color={color} />;
// };

// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         if (route.name === 'Home') {
//           iconName = 'planet-outline';
//         } else if (route.name === 'Diary') {
//           iconName = 'book-outline';
//         } else if (route.name === 'Setting') {
//           iconName = 'ellipsis-horizontal-outline';
//         }
//         const iconColor = focused ? colors.textColor : color;
//         return CustomTabBarIcon(iconName, size, iconColor);
//       },
//       tabBarStyle: {
//         backgroundColor: colors.bgColor 
//       }
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Diary" component={Diary} />
//     <Tab.Screen name="Setting" component={Setting} />
//   </Tab.Navigator>
// );

// const Navigator = () => (
//   <>
//     <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
//     <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
//       <Stack.Screen name="Tabs" component={TabNavigator} />
//       <Stack.Screen name="Write" component={Write} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//     </Stack.Navigator>
//   </>
// );

// export default Navigator;




// // client/navigator.js

// import React, { useContext } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './screens/Home';
// import Write from './screens/Write';
// import Diary from './screens/Diary';
// import Setting from './screens/Setting';
// import LoginScreen from './screens/LoginScreen';
// import { AuthContext } from './context/AuthContext';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const { user } = useContext(AuthContext);
  
//   if (!user) {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     );
//   }

//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Diary" component={Diary} />
//       <Tab.Screen name="Setting" component={Setting} />
//     </Tab.Navigator>
//   );
// };

// const Navigator = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Tabs" component={TabNavigator} />
//     <Stack.Screen name="Write" component={Write} />
//   </Stack.Navigator>
// );

// export default Navigator;




// // client/navigator.js

// import React, { useContext } from 'react';
// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';  // Ensure this import is added
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import Home from './screens/Home';
// import Write from './screens/Write';
// import Diary from './screens/Diary';
// import Setting from './screens/Setting';
// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import { AuthContext } from './context/AuthContext';
// import colors from './colors';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const CustomTabBarIcon = (name, size, color) => {
//   return <Ionicons name={name} size={size} color={color} />;
// };

// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         if (route.name === 'Home') {
//           iconName = 'planet-outline';
//         } else if (route.name === 'Diary') {
//           iconName = 'book-outline';
//         } else if (route.name === 'Setting') {
//           iconName = 'ellipsis-horizontal-outline';
//         }
//         const iconColor = focused ? colors.textColor : color;
//         return CustomTabBarIcon(iconName, size, iconColor);
//       },
//       tabBarStyle: {
//         backgroundColor: colors.bgColor,
//       },
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Diary" component={Diary} />
//     <Tab.Screen name="Setting" component={Setting} />
//   </Tab.Navigator>
// );

// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//   </Stack.Navigator>
// );

// const AppNavigator = () => {
//   const { user } = useContext(AuthContext);

//   return user ? (
//     <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
//       <Stack.Screen name="Tabs" component={TabNavigator} />
//       <Stack.Screen name="Write" component={Write} />
//     </Stack.Navigator>
//   ) : (
//     <AuthStack />
//   );
// };

// const Navigator = () => (
//   <>
//     <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
//     <AppNavigator />
//   </>
// );

// export default Navigator;



// client/navigator.js

import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Write from './screens/Write';
import Diary from './screens/Diary';
import Setting from './screens/Setting';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { AuthContext } from './context/AuthContext';
import colors from './colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarIcon = (name, size, color) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'planet-outline';
        } else if (route.name === 'Diary') {
          iconName = 'book-outline';
        } else if (route.name === 'Setting') {
          iconName = 'ellipsis-horizontal-outline';
        }
        const iconColor = focused ? colors.textColor : color;
        return CustomTabBarIcon(iconName, size, iconColor);
      },
      tabBarStyle: {
        backgroundColor: colors.bgColor,
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Diary" component={Diary} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Write" component={Write} />
      {!user && (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

const Navigator = () => (
  <>
    <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </>
);

export default Navigator;
