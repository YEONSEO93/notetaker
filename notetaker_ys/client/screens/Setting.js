// screens/Setting.js

import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../colors";
import { AuthContext } from '../context/AuthContext';

const SettingScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const darkModeSetting = await AsyncStorage.getItem('isDarkMode');
        const largeTextSetting = await AsyncStorage.getItem('isLargeText');
        setIsDarkMode(darkModeSetting === 'true');
        setIsLargeText(largeTextSetting === 'true');
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const toggleDarkMode = async () => {
    try {
      await AsyncStorage.setItem('isDarkMode', String(!isDarkMode));
      setIsDarkMode(!isDarkMode);
    } catch (error) {
      console.error('Error toggling dark mode:', error);
    }
  };

  const toggleTextSize = async () => {
    try {
      await AsyncStorage.setItem('isLargeText', String(!isLargeText));
      setIsLargeText(!isLargeText);
    } catch (error) {
      console.error('Error toggling text size:', error);
    }
  };

  const getDynamicStyles = () => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: isDarkMode ? 'black' : colors.bgColor,
      },
      sectionTitle: {
        color: isDarkMode ? 'white' : colors.textColor,
        fontWeight: 'bold',
        fontSize: isLargeText ? 20 : 16,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
      },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode ? 'white' : colors.btnColor,
      },
      text: {
        color: isDarkMode ? 'white' : colors.textColor,
        fontSize: isLargeText ? 20 : 16,
      },
    });
  };

  const styles = getDynamicStyles();

  const handleAccountDetailsPress = () => {
    if (user) {
      // Navigate to account details screen or show logout options
      // For now, let's just log the user out for demonstration purposes
      logout();
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Your account</Text>
        <TouchableOpacity style={styles.item} onPress={handleAccountDetailsPress}>
          <Text style={styles.text}>{user ? user.name : 'Login'}</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.item}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Large Text</Text>
          <Switch value={isLargeText} onValueChange={toggleTextSize} />
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>About App</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
