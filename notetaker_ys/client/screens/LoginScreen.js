

// // // client/screens/LoginScreen.js

// // import React, { useState, useContext } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// // import { AuthContext } from '../context/AuthContext';

// // const LoginScreen = ({ navigation }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const { login } = useContext(AuthContext);

// //   const handleLogin = async () => {
// //     try {
// //       await login(username, password);
// //       navigation.navigate('Home');
// //     } catch (err) {
// //       setError('Invalid username or password');
// //     }
// //   };

// //   const handleSignUp = () => {
// //     navigation.navigate('SignUp');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Login</Text>
// //       {error ? <Text style={styles.error}>{error}</Text> : null}
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Username"
// //         value={username}
// //         onChangeText={setUsername}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         secureTextEntry
// //         value={password}
// //         onChangeText={setPassword}
// //       />
// //       <Button title="Login" onPress={handleLogin} />
// //       <Text style={styles.or}>or</Text>
// //       <Button title="Sign Up" onPress={handleSignUp} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     paddingHorizontal: 10,
// //     marginBottom: 10,
// //   },
// //   error: {
// //     color: 'red',
// //     marginBottom: 10,
// //   },
// //   or: {
// //     marginVertical: 10,
// //   },
// // });

// // export default LoginScreen;



// // client/screens/LoginScreen.js

// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { AuthContext } from '../context/AuthContext';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useContext(AuthContext);

//   const handleLogin = async () => {
//     try {
//       await login(username, password);
//       navigation.navigate('Home');
//     } catch (err) {
//       setError('Invalid username or password');
//     }
//   };

//   const handleSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Text style={styles.or}>or</Text>
//       <Button title="Sign Up" onPress={handleSignUp} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   or: {
//     marginVertical: 10,
//   },
// });

// export default LoginScreen;



// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { AuthContext } from '../context/AuthContext';
// import colors from '../colors';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useContext(AuthContext);

//   const handleLogin = async () => {
//     try {
//       await login(username, password);
//       navigation.navigate('Home');
//     } catch (err) {
//       setError('Invalid username or password');
//     }
//   };

//   const handleSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         placeholderTextColor={colors.textColor}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         placeholderTextColor={colors.textColor}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <Text style={styles.or}>or</Text>
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.bgColor,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: colors.textColor,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: colors.cardColor,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     color: colors.textColor,
//     backgroundColor: colors.cardColor,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   or: {
//     marginVertical: 10,
//     color: colors.textColor,
//   },
//   button: {
//     width: '100%',
//     paddingVertical: 10,
//     backgroundColor: colors.btnColor,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;



import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import colors from '../colors';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    console.log('Login initiated');
    try {
      await login(username, password);
      console.log('Login successful');
      navigation.navigate('Home');
    } catch (err) {
      console.log('Login failed', err);
      setError('Invalid username or password');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={colors.textColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={colors.textColor}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.or}>or</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgColor,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textColor,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: colors.cardColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: colors.textColor,
    backgroundColor: colors.cardColor,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  or: {
    marginVertical: 10,
    color: colors.textColor,
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: colors.btnColor,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
