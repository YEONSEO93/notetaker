
// styles/StyledLogin.js

import styled from 'styled-components/native';
import colors from '../styles/colors/';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start; /* Align items to the top */
  align-items: center;
  background-color: ${colors.bgColor};
  padding-horizontal: 20px;
  padding-top: 200px; /* Add padding to the top to move the content down slightly */
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.textColor};
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderColor};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding-horizontal: 10px;
  color: ${colors.textColor};
  background-color: transparent;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-vertical: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding-vertical: 15px;
  background-color: ${colors.btnColor};
  border-radius: 10px;
  align-items: center;
  margin-horizontal: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const OrText = styled.Text`
  margin-vertical: 10px;
  color: ${colors.textColor};
  text-align: center;
  width: 100%;
`;
