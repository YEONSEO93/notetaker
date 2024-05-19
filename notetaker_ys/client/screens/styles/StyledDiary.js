// // styles/StyledDiary.js

// import styled from 'styled-components/native';
// import colors from '../styles/colors/';  // Ensure this path is correct

// export const Container = styled.View`
//   flex: 1;
//   background-color: ${props => props.theme.white || colors.white};
// `;

// export const Input = styled.TextInput`
//   width: 100%;
//   height: 60px;
//   border-color: ${props => props.theme.textColor || colors.textColor};
//   border-width: 1px;
//   border-radius: 20px;
//   padding-horizontal: 10px;
//   margin-bottom: 1px;
//   background-color: ${props => props.theme.white || colors.white};
//   color: ${props => props.theme.textColor || colors.textColor};
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
//   margin-top: 10px;
// `;

// export const DeleteButton = styled.Text`
//   color: red;
//   margin-top: 10px;
// `;

// export const StyledView = styled.View`
//   background-color: ${colors.bgColor};
//   flex: 1;
//   padding: 0px 30px;
// `;

// export const Title = styled.Text`
//   color: ${colors.textColor};
//   margin: 50px 0px;
//   text-align: center;
//   font-size: 28px;
//   font-weight: 500;
// `;

// export const TextInput = styled.TextInput`
//   background-color: white;
//   border-radius: 20px;
//   padding: 10px 20px;
//   font-size: 18px;
//   box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
// `;

// export const Btn = styled.TouchableOpacity`
//   width: 100%;
//   margin-top: 20px;
//   background-color: ${colors.btnColor};
//   padding: 10px 20px;
//   align-items: center;
//   border-radius: 20px;
//   box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
// `;

// export const BtnText = styled.Text`
//   color: white;
//   font-weight: 500;
//   font-size: 18px;
// `;

// export const Emotions = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// export const Emotion = styled.TouchableOpacity`
//   background-color: white;
//   box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
//   padding: 10px;
//   border-radius: 10px;
//   border-width: 1px;
//   border-color: ${(props) => props.selected ? 'rgba(41, 30, 95, 1);' : 'transparent'};
// `;

// export const EmotionText = styled.Text`
//   font-size: 24px;
// `;



// import styled from 'styled-components/native';
// import colors from '../styles/colors/';  // Ensure this path is correct

// export const Container = styled.View`
//   flex: 1;
//   background-color: ${props => props.theme.white || colors.white};
// `;

// export const Input = styled.TextInput`
//   width: 100%;
//   height: 60px;
//   border-color: ${props => props.theme.textColor || colors.textColor};
//   border-width: 1px;
//   border-radius: 20px;
//   padding-horizontal: 10px;
//   margin-bottom: 1px;
//   background-color: ${props => props.theme.white || colors.white};
//   color: ${props => props.theme.textColor || colors.textColor};
// `;

// export const Button = styled.TouchableOpacity`
//   width: 100%;
//   padding-vertical: 10px;
//   background-color: ${props => props.theme.btnColor || colors.btnColor};
//   border-radius: 20px;
//   align-items: center;
//   margin-vertical: 5px;
// `;

// // Update Text and ButtonText components
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
//   margin-top: 10px;
// `;

// export const DeleteButton = styled.Text`
//   color: red;
//   margin-top: 10px;
// `;





import styled from 'styled-components/native';
import colors from '../styles/colors/';  // Ensure this path is correct

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.white || colors.white};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  border-color: ${props => props.theme.textColor || colors.textColor};
  border-width: 1px;
  border-radius: 20px;
  padding-horizontal: 10px;
  margin-bottom: 1px;
  background-color: ${props => props.theme.white || colors.white};
  color: ${props => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize}px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 10px;
  background-color: ${props => props.theme.btnColor || colors.btnColor};
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
  border-bottom-color: ${props => props.theme.bgColor_light || colors.bgColor_light};
  background-color: ${props => props.theme.bgColor_light || colors.bgColor_light};
  border-radius: 30px;
  margin-vertical: 1px;
`;

export const EntryText = styled.Text`
  color: ${props => props.theme.textColor || colors.textColor};
  font-size: ${props => props.textSize}px;
`;

export const EntryDate = styled.Text`
  color: ${props => props.theme.textColor || colors.textColor};
  font-size: ${props => props.textSize - 4}px;
  margin-top: 5px;
`;

export const EditButton = styled.Text`
  color: ${props => props.theme.btnColor || colors.btnColor};
  font-size: ${(props) => props.textSize}px;
  margin-top: 10px;
`;

export const DeleteButton = styled.Text`
  color: red;
  font-size: ${(props) => props.textSize}px;
  margin-top: 10px;
`;
