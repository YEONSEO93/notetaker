import React from 'react';
import { ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px;
`;

const SectionTitle = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

const DescriptionText = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  margin-bottom: 20px;
`;

const About = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView>
        <SectionTitle>About This Application</SectionTitle>
        <DescriptionText>This Notetaker application helps users to create, read, update, and delete diary entries. It includes features like user authentication, dark mode, large text settings, and a splash screen. The app is designed to provide a simple and user-friendly interface for taking notes efficiently.</DescriptionText>
        <Button title="Open Source Licenses" onPress={() => navigation.navigate('Licenses')} />
      </ScrollView>
    </Container>
  );
};

export default About;
