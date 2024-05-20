
// LoginScreen.js
import React, { useState, useContext } from 'react';
import { Container, Title, InputContainer, Input, ButtonContainer, Button, ButtonText, ErrorText, OrText } from './styles/StyledLogin/';
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
      <InputContainer>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={colors.placeholderTextColor}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={colors.placeholderTextColor}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button onPress={handleSignUp}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LoginScreen;
