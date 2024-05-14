// // screens/Setting.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import colors from '../colors';

const SettingScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const getDynamicStyles = () => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.bgColor,
      },
      sectionTitle: {
        color: colors.textColor,
        fontWeight: 'bold',
        fontSize: 20,
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
        borderBottomColor: colors.btnColor,
      },
      text: {
        color: colors.textColor,
        fontSize: 16,
      },
      button: {
        margin: 20,
      },
    });
  };

  const styles = getDynamicStyles();

  const handleAccountPress = () => {
    if (!user) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Your account</Text>
        <TouchableOpacity style={styles.item} onPress={handleAccountPress}>
          <Text style={styles.text}>{user ? user.username : 'Login'}</Text>
        </TouchableOpacity>
        {user && (
          <View style={styles.button}>
            <Button title="Logout" onPress={logout} />
          </View>
        )}

        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.item}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Large Text</Text>
          <Switch />
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


