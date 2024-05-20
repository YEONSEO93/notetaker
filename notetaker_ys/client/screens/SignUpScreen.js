
// SignUpScreen.js
import React, { useState, useContext } from 'react';
import { Container, Title, Input, ErrorText, SignUpButton, ButtonText } from './styles/StyledSignUp/';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext'; // Assuming you want to apply theming as well

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);
  const { theme, textSize } = useContext(ThemeContext); // For theming

  const handleSignUp = async () => {
    try {
      console.log("Sign up initiated");
      await signup(username, password, name, email);
      navigation.navigate('Home');
    } catch (err) {
      console.log("Sign up failed", err);
      setError('Failed to sign up');
    }
  };

  return (
    <Container theme={theme}>
      <Title theme={theme} textSize={textSize}>Sign Up</Title>
      {error ? <ErrorText theme={theme}>{error}</ErrorText> : null}
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        theme={theme}
        textSize={textSize}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        theme={theme}
        textSize={textSize}
      />
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        theme={theme}
        textSize={textSize}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
