//LoginScreen.js
import React, { useState, useContext } from 'react';
import { Container, Title, Input, Button, ButtonText, ErrorText, OrText } from './styles/StyledLogin/';
import { AuthContext } from '../context/AuthContext';
import colors from './styles/colors/';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigation.navigate('Home');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <Title>Login</Title>
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={colors.textColor}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={colors.textColor}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
      <OrText>or</OrText>
      <Button onPress={handleSignUp}>
        <ButtonText>Sign Up</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginScreen;


