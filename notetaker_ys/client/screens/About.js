// // client/screens/About

import React, { useContext } from 'react';
import { ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px;
`;

const SectionTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: ${(props) => props.textSize + 6}px; /* Adjust based on textSize */
  margin-bottom: 10px;
`;

const DescriptionText = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px; /* Adjust based on textSize */
  margin-bottom: 20px;
`;

const About = () => {
  const navigation = useNavigation();
  const { theme, textSize } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <ScrollView>
        <SectionTitle theme={theme} textSize={textSize}>About This Application</SectionTitle>
        <DescriptionText theme={theme} textSize={textSize}>
          This Notetaker application helps users to create, read, update, and delete diary entries. It includes features like user authentication, dark mode, large text settings, and a splash screen. The app is designed to provide a simple and user-friendly interface for taking notes efficiently.
        </DescriptionText>
        <Button title="Open Source Licenses" onPress={() => navigation.navigate('Licenses')} />
      </ScrollView>
    </Container>
  );
};

export default About;
