import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WriteScreen from "../screens/WriteScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="WriteScreen" component={WriteScreen} />
  </Stack.Navigator>
);

export default Navigator;
