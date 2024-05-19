//SignUpScreen.js
import React, { useState, useContext } from 'react';
import { Container, Title, Input, ErrorText, SignUpButton, ButtonText } from './styles/StyledSignUp/';
import { AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

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
    <Container>
      <Title>Sign Up</Title>
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <SignUpButton onPress={handleSignUp}>
        <ButtonText>Sign Up</ButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignUpScreen;
