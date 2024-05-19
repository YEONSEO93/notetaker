// styles/StyledSignUp.js
import styled from 'styled-components/native';
import colors from './colors/';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: ${colors.bgColor};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.textColor};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-color: ${colors.white};
  border-width: 1px;
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-bottom: 10px;
  background-color: white;
  color: ${colors.textColor};
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 10px;
  background-color: ${colors.btnColor};
  border-radius: 5px;
  align-items: center;
  margin-vertical: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
