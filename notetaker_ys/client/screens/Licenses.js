// // client/screens/Licenses

import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from '../context/ThemeContext';
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
  font-size: ${(props) => props.textSize}px; /* Adjust based on textSize */
`;

const LicenseText = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px; /* Adjust based on textSize */
`;

const Licenses = () => {
  const { theme, textSize } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      {Object.entries(licenses).map(([key, value]) => (
        <LicenseItem key={key}>
          <LicenseName theme={theme} textSize={textSize}>{key}</LicenseName>
          <LicenseText theme={theme} textSize={textSize}>{value.licenses}</LicenseText>
        </LicenseItem>
      ))}
    </Container>
  );
};

export default Licenses;
