// // navigator.js

// import React, { useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import Home from './screens/Home';
// import Write from './screens/Write';
// import Diary from './screens/Diary';
// import Setting from './screens/Setting';
// import About from './screens/About';
// import Licenses from './screens/Licenses';
// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import { AuthContext } from './context/AuthContext';
// import { ThemeContext } from './context/ThemeContext';
// import Calendar from './screens/Calendar';


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const { theme, textSize } = useContext(ThemeContext);

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'planet-outline';
//           } else if (route.name === 'Diary') {
//             iconName = 'book-outline';
//           } else if (route.name === 'Setting') {
//             iconName = 'ellipsis-horizontal-outline';
//           }
//           const iconColor = focused ? theme.textColor : color;
//           const iconSize = textSize * 1.5;
//           return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
//         },
//         tabBarStyle: {
//           backgroundColor: theme.bgColor,
//         },
//         tabBarLabelStyle: {
//           fontSize: textSize,
//         },
//         headerShown: true, // Show the header for each tab
//         headerStyle: {
//           backgroundColor: theme.bgColor,
//         },
//         headerTintColor: theme.textColor,
//         headerTitleStyle: {
//           color: theme.textColor,
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Diary" component={Diary} />
//       <Tab.Screen name="Setting" component={Setting} />
//       <Tab.Screen name="Calendar" component={Calendar} options={{ tabBarLabel: 'Calendar' }} />

//     </Tab.Navigator>
//   );
// };

// const AppNavigator = () => {
//   const { user } = useContext(AuthContext);
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: theme.bgColor,
//         },
//         headerTintColor: theme.textColor,
//         headerTitleStyle: {
//           color: theme.textColor,
//         },
//       }}
//     >
//       {user ? (
//         <>
//           <Stack.Screen name=" " component={TabNavigator} options={{ headerShown: false }} />
//           <Stack.Screen name="Write" component={Write} />
//           <Stack.Screen name="About" component={About} />
//           <Stack.Screen name="Licenses" component={Licenses} />
//         </>
//       ) : (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// };

// const Navigator = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// };

// export default Navigator;

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Diary from './screens/Diary';
import Setting from './screens/Setting';
import Calendar from './screens/Calendar';
import { ThemeContext } from './context/ThemeContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme, textSize } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'planet-outline';
          } else if (route.name === 'Diary') {
            iconName = 'book-outline';
          } else if (route.name === 'Calendar') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Setting') {
            iconName = 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.textColor,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: textSize },
        tabBarStyle: { backgroundColor: theme.bgColor },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diary" component={Diary} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

