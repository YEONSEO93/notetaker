
// import React, { useContext, useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch, Button, Modal } from 'react-native';
// import { AuthContext } from '../context/AuthContext';
// import { ThemeContext } from '../context/ThemeContext';
// import colors from '../colors';
// import Licenses from './Licenses'; // Import the Licenses component

// const SettingScreen = ({ navigation }) => {
//   const { user, logout } = useContext(AuthContext);
//   const { theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText } = useContext(ThemeContext);
//   const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

//   const getDynamicStyles = () => {
//     return StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: theme.bgColor,
//       },
//       sectionTitle: {
//         color: theme.textColor,
//         fontWeight: 'bold',
//         fontSize: 20,
//         marginTop: 20,
//         marginLeft: 20,
//         marginBottom: 10,
//       },
//       item: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: theme.btnColor,
//       },
//       text: {
//         color: theme.textColor,
//         fontSize: textSize,
//       },
//       button: {
//         margin: 20,
//       },
//       modalView: {
//         flex: 1,
//         backgroundColor: theme.bgColor,
//         padding: 20,
//         paddingTop: 50, // Adjust this to add space at the top
//       },
//       closeButton: {
//         alignSelf: 'flex-end',
//         marginBottom: 10,
//       },
//       closeButtonText: {
//         color: theme.textColor,
//         fontSize: 18,
//         fontWeight: 'bold',
//       },
//     });
//   };

//   const styles = getDynamicStyles();

//   const handleAccountPress = () => {
//     if (!user) {
//       navigation.navigate('Login');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text style={styles.sectionTitle}>Your account</Text>
//         <TouchableOpacity style={styles.item} onPress={handleAccountPress}>
//           <Text style={styles.text}>{user ? user.username : 'Login'}</Text>
//         </TouchableOpacity>
//         {user && (
//           <View style={styles.button}>
//             <Button title="Logout" onPress={logout} />
//           </View>
//         )}

//         <Text style={styles.sectionTitle}>Settings</Text>
//         <View style={styles.item}>
//           <Text style={styles.text}>Dark Mode</Text>
//           <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
//         </View>
//         <View style={styles.item}>
//           <Text style={styles.text}>Large Text</Text>
//           <Switch value={isLargeText} onValueChange={toggleLargeText} />
//         </View>

//         <Text style={styles.sectionTitle}>About</Text>
//         <TouchableOpacity style={styles.item} onPress={() => setModalVisible(true)}>
//           <Text style={styles.text}>About App</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.modalView}>
//           <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//           <Licenses />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default SettingScreen;


import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch, Modal } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import colors from '../colors';
import Licenses from './Licenses'; // Import the Licenses component

const SettingScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  const { theme, textSize, toggleDarkMode, toggleLargeText, isDarkMode, isLargeText } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const getDynamicStyles = () => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.bgColor,
      },
      sectionTitle: {
        color: theme.textColor,
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
        borderBottomColor: theme.btnColor,
      },
      text: {
        color: theme.textColor,
        fontSize: textSize,
      },
      buttonContainer: {
        margin: 20,
        alignItems: 'center',
      },
      button: {
        backgroundColor: theme.btnColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: textSize,
        fontWeight: 'bold',
      },
      modalView: {
        flex: 1,
        backgroundColor: theme.bgColor,
        padding: 20,
        paddingTop: 50, // Adjust this to add space at the top
      },
      closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
      },
      closeButtonText: {
        color: theme.textColor,
        fontSize: 18,
        fontWeight: 'bold',
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.item}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Large Text</Text>
          <Switch value={isLargeText} onValueChange={toggleLargeText} />
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.item} onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>About App</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Licenses />
        </View>
      </Modal>
    </View>
  );
};

export default SettingScreen;
