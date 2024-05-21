
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';
const licenses = require('../assets/licenses.json'); // Ensure this path is correct

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px;
`;

const LicenseItem = styled.View`
  margin-bottom: 15px;
`;

const LicenseName = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 16px;
`;

const LicenseText = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
`;

const Licenses = () => {
  return (
    <Container>
      {Object.entries(licenses).map(([key, value]) => (
        <LicenseItem key={key}>
          <LicenseName>{key}</LicenseName>
          <LicenseText>{value.licenses}</LicenseText>
        </LicenseItem>
      ))}
    </Container>
  );
};

export default Licenses;
