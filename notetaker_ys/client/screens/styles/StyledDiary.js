// // // styles/StyledDiary.js

// import styled from 'styled-components/native';
// import colors from '../styles/colors/';

// export const Container = styled.View`
//   flex: 1;
//   color: ${props => props.theme.bgColor_light || colors.bgColor_light};

//   background-color: ${props => props.theme.bgColor_light || colors.bgColor_light};
// `;

// export const Input = styled.TextInput`
//   width: 100%;
//   height: 60px;
//   border-color: ${props => props.theme.textColor || colors.textColor};
//   border-width: 1px;
//   border-radius: 20px;
//   padding-horizontal: 10px;
//   margin-bottom: 1px;
//   background-color: ${props => props.theme.bgColor_light || colors.bgColor_light};
//   color: ${props => props.theme.textColor || colors.textColor};
//   font-size: ${(props) => props.textSize}px;
// `;

// export const Button = styled.TouchableOpacity`
//   width: 100%;
//   padding-vertical: 10px;
//   background-color: ${props => props.theme.btnColor || colors.btnColor};
//   border-radius: 20px;
//   align-items: center;
//   margin-vertical: 5px;
// `;

// export const ButtonText = styled.Text`
//   color: white;
//   font-size: ${(props) => props.textSize}px;
//   font-weight: bold;
// `;

// export const Item = styled.View`
//   padding: 20px;
//   border-bottom-width: 1px;
//   border-bottom-color: ${props => props.theme.bgColor_light || colors.bgColor_light};
//   background-color: ${props => props.theme.bgColor_light || colors.bgColor_light};
//   border-radius: 30px;
//   margin-vertical: 1px;
// `;

// export const EntryText = styled.Text`
//   color: ${props => props.theme.textColor || colors.textColor};
//   font-size: ${props => props.textSize}px;
// `;

// export const EntryDate = styled.Text`
//   color: ${props => props.theme.textColor || colors.textColor};
//   font-size: ${props => props.textSize - 4}px;
//   margin-top: 5px;
// `;

// export const EditButton = styled.Text`
//   color: ${props => props.theme.btnColor || colors.btnColor};
//   font-size: ${(props) => props.textSize}px;
//   margin-top: 10px;
// `;

// export const DeleteButton = styled.Text`
//   color: red;
//   font-size: ${(props) => props.textSize}px;
//   margin-top: 10px;
// `;



///


// styles/StyledDiary.js

import styled from 'styled-components/native';
import colors from '../styles/colors/';

export const Container = styled.View`
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
  margin-bottom: 10px;
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
  border-bottom-color: ${(props) => props.theme.bgColor_light || colors.bgColor_light};
  background-color: ${(props) => props.theme.bgColor_light || colors.bgColor_light};
  border-radius: 20px;
  margin-vertical: 10px;
`;

export const EntryText = styled.Text`
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize}px;
`;

export const EntryDate = styled.Text`
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize - 4}px;
  margin-top: 5px;
`;

export const EditButton = styled.Text`
  color: ${(props) => props.theme.btnColor || colors.btnColor};
  font-size: ${(props) => props.textSize}px;
  margin-top: 10px;
`;

export const DeleteButton = styled.Text`
  color: red;
  font-size: ${(props) => props.textSize}px;
  margin-top: 10px;
`;
