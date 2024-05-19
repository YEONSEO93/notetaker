// styles/StyledLogin.js

import styled from 'styled-components/native';
import colors from '../styles/colors/';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgColor};
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.textColor};
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-color: ${colors.white};
  border-width: 1px;
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-bottom: 10px;
  color: ${colors.textColor};
  background-color: ${colors.white};
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
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

export const OrText = styled.Text`
  margin-vertical: 10px;
  color: ${colors.textColor};
`;

