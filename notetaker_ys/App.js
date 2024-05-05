
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import colors from './colors'; // Import the colors object

import HomeScreen from './screens/HomeScreen';
import DiaryScreen from './screens/DiaryScreen';
import SettingScreen from './screens/SettingScreen';
import CustomHome from './components/CustomHome';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Diary') {
              iconName = 'book';
            } else if (route.name === 'Setting') {
              iconName = 'settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.textColor, // Use textColor for active tab
          inactiveTintColor: colors.btnColor, // Use cardColor for inactive tab
          style: {
            backgroundColor: colors.textColor, // Use bgColor for tab bar background
          },
        }}
      >
        <Tab.Screen name="Home" component={CustomHome} />
        <Tab.Screen name="Diary" component={DiaryScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

