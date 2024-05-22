// styles/StyledSignUp.js
import styled from 'styled-components/native';
import colors from '../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px;
  padding-top: 150px; /* Adjusted padding for better alignment */
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize + 8}px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-color: ${(props) => props.theme.bgColor_light};
  border-width: 1px;
  border-radius: 10px;
  padding-horizontal: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.inputBgColor};
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: ${(props) => props.textSize - 2}px;
  margin-bottom: 10px;
  text-align: center;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 15px;
  background-color: ${(props) => props.theme.btnColor};
  border-radius: 50px;
  align-items: center;
  margin-vertical: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props.textSize}px;
  font-weight: bold;
`;
