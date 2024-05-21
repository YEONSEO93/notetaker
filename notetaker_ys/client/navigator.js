// navigator.js

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Write from './screens/Write';
import Diary from './screens/Diary';
import Setting from './screens/Setting';
import About from './screens/About';
import Licenses from './screens/Licenses';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { AuthContext } from './context/AuthContext';
import { ThemeContext } from './context/ThemeContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme, textSize } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'planet-outline';
          } else if (route.name === 'Diary') {
            iconName = 'book-outline';
          } else if (route.name === 'Setting') {
            iconName = 'ellipsis-horizontal-outline';
          }
          const iconColor = focused ? theme.textColor : color;
          const iconSize = textSize * 1.5;
          return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
        },
        tabBarStyle: {
          backgroundColor: theme.bgColor,
        },
        tabBarLabelStyle: {
          fontSize: textSize,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diary" component={Diary} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      {user ? (
        <>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="Write" component={Write} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Licenses" component={Licenses} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
