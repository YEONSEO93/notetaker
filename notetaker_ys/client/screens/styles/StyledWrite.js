// // styles/StyledWrite.js

// import styled from 'styled-components/native';
// import colors from '../styles/colors/';

// export const View = styled.View`
//   background-color: ${colors.bgColor_light};
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
//   border-radius: 100px;
//   border-width: 1px;
//   border-color: ${(props) => props.selected ? 'rgba(41, 30, 95, 1);' : 'transparent'};
// `;

// export const EmotionText = styled.Text`
//   font-size: 24px;
// `;



// import styled from 'styled-components/native';
// import colors from '../styles/colors/';

// export const View = styled.View`
//   background-color: ${colors.bgColor_light};
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

// // Update ButtonText component
// export const BtnText = styled.Text`
//   color: white;
//   font-size: ${(props) => props.textSize}px;
//   font-weight: 500;
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
//   border-radius: 100px;
//   border-width: 1px;
//   border-color: ${(props) => props.selected ? 'rgba(41, 30, 95, 1);' : 'transparent'};
// `;

// export const EmotionText = styled.Text`
//   font-size: 24px;
// `;



import styled from 'styled-components/native';
import colors from '../styles/colors/';

export const View = styled.View`
  background-color: ${colors.bgColor_light};
  flex: 1;
  padding: 0px 30px;
`;

export const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: ${(props) => props.textSize + 8}px;
  font-weight: 500;
`;

export const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: ${(props) => props.textSize}px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  color: ${(props) => props.theme.textColor};
`;

export const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;

export const BtnText = styled.Text`
  color: white;
  font-size: ${(props) => props.textSize}px;
  font-weight: 500;
`;

export const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Emotion = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  padding: 10px;
  border-radius: 100px;
  border-width: 1px;
  border-color: ${(props) => props.selected ? 'rgba(41, 30, 95, 1);' : 'transparent'};
`;

export const EmotionText = styled.Text`
  font-size: ${(props) => props.textSize}px;
`;
