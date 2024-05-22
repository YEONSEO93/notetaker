
// // styles/StyledLogin.js

import styled from 'styled-components/native';
import colors from '../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  padding-horizontal: 20px;
  padding-top: 120px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.borderColor};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding-horizontal: 10px;
  color: ${(props) => props.theme.textColor};
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
  background-color: ${(props) => props.theme.btnColor};
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
  color: ${(props) => props.theme.textColor};
  text-align: center;
  width: 100%;
`;

