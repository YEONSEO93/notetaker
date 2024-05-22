// SignUpScreen.js
import React, { useState, useContext } from 'react';
import { Container, Title, Input, ErrorText, SignUpButton, ButtonText } from './styles/StyledSignUp';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);
  const { theme, textSize } = useContext(ThemeContext);

  const handleSignUp = async () => {
    try {
      console.log("Sign up initiated");
      await signup(username, password, name, email);
      navigation.navigate('Home');
    } catch (err) {
      console.log("Sign up failed", err);
      setError(err.message || 'Failed to sign up');
    }
  };

  return (
    <Container theme={theme}>
      <Title theme={theme} textSize={textSize}>Sign Up</Title>
      {error ? <ErrorText theme={theme} textSize={textSize}>{error}</ErrorText> : null}
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={theme.placeholderTextColor}
        theme={theme}
        textSize={textSize}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={theme.placeholderTextColor}
        theme={theme}
        textSize={textSize}
      />
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={theme.placeholderTextColor}
        theme={theme}
        textSize={textSize}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={theme.placeholderTextColor}
        theme={theme}
        textSize={textSize}
      />
      <SignUpButton onPress={handleSignUp} theme={theme}>
        <ButtonText theme={theme} textSize={textSize}>Sign Up</ButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignUpScreen;
