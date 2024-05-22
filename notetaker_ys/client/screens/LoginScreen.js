// LoginScreen.js

import React, { useState, useContext } from 'react';
import { Container, Title, InputContainer, Input, ButtonContainer, Button, ButtonText, ErrorText } from './styles/StyledLogin';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

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
    <Container theme={theme}>
      <Title theme={theme}>Login</Title>
      {error ? <ErrorText theme={theme}>{error}</ErrorText> : null}
      <InputContainer theme={theme}>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={theme.placeholderTextColor}
          theme={theme}
        />
      </InputContainer>
      <InputContainer theme={theme}>
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={theme.placeholderTextColor}
          theme={theme}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={handleLogin} theme={theme}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button onPress={handleSignUp} theme={theme}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LoginScreen;
