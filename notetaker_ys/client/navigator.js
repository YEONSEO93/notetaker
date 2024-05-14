
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



