// Licenses.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
const licenses = require('../assets/licenses.json'); // Correct path to licenses.json

const Licenses = () => {
  return (
    <ScrollView style={styles.container}>
      {Object.entries(licenses).map(([key, value]) => (
        <View key={key} style={styles.licenseItem}>
          <Text style={styles.licenseName}>{key}</Text>
          <Text style={styles.licenseText}>{value.licenses}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  licenseItem: {
    marginBottom: 15,
  },
  licenseName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  licenseText: {
    fontSize: 14,
  },
});

export default Licenses;
