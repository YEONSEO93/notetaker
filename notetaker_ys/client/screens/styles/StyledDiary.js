
// styles/StyledDiary.js

import styled from 'styled-components/native';
import colors from '../styles/colors/';

export const Container = styled.View`
  padding-top: 20px;
  flex: 1;
  background-color: ${(props) => props.theme.bgColor || colors.bgColor_light};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  border-color: ${(props) => props.theme.textColor || colors.textColor};
  border-width: 1px;
  border-radius: 20px;
  padding-horizontal: 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.inputBgColor || colors.bgColor_light};
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize}px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 10px;
  background-color: ${(props) => props.theme.btnColor || colors.btnColor};
  border-radius: 20px;
  align-items: center;
  margin-vertical: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props.textSize}px;
  font-weight: bold;
`;

export const Item = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.textColor || colors.bgColor_light};
  background-color: ${(props) => props.theme.bgColor || colors.bgColor_light};
  border-radius: 20px;
  margin-vertical: 2px;
`;

export const EntryText = styled.Text`
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize}px;
`;

export const EntryDate = styled.Text`
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize - 1}px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const EditButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.btnColor || colors.btnColor};
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-right: 10px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-left: 10px;
`;

export const ButtonLabelText = styled.Text`
  color: white;
  font-size: ${(props) => props.textSize}px;
  font-weight: bold;
  margin-left: 5px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  border-width: 1px;
  border-color: ${(props) => props.theme.textColor || colors.textColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SearchBar = styled.TextInput`
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px;
  flex: 1;
  padding: 10px;
`;
 