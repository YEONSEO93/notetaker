// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Write')}>
        <Text>Go to Write Screen</Text>
      </TouchableOpacity>
    </View>
  );
}






