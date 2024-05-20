
// // styles/StyledHome.js
// import styled from "styled-components/native";
// import colors from '../styles/colors/';

// export const StyledView = styled.View`
//   flex: 1;
//   padding: 0px 30px;
//   padding-top: 100px;
//   background-color: ${(props) => props.theme.bgColor || colors.white};
// `;

// export const MainTitle = styled.Text`
//   color: ${(props) => props.theme.textColor || colors.textColor};
//   font-size: 48px;
//   font-weight: 700;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// export const SubTitle = styled.Text`
//   color: ${(props) => props.theme.textColor || colors.textColor};
//   font-size: 20px;
//   font-weight: 400;
//   margin-bottom: 50px;
//   text-align: center;
// `;

// export const IconButton = styled.TouchableOpacity`
//   height: 80px;
//   width: 80px;
//   border-radius: 40px;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.btnColor || colors.btnColor};
//   elevation: 5;
//   box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
//   position: absolute;
//   bottom: 50px;
//   right: 50px;
// `;

// export const IconContainer = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;






// styles/StyledHome.js
import styled from "styled-components/native";
import colors from '../styles/colors/';

export const StyledView = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${(props) => props.theme.bgColor || colors.white};
`;

export const MainTitle = styled.Text`
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize * 3}px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.textColor || colors.textColor};
  font-size: ${(props) => props.textSize * 1.25}px;
  font-weight: 400;
  margin-bottom: 50px;
  text-align: center;
`;

export const IconButton = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.btnColor || colors.btnColor};
  elevation: 5;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

export const IconContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
