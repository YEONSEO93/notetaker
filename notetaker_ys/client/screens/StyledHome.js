
// StyledHome.js
import styled from "styled-components/native";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors"; 

// Styled components for the Home view
export const StyledView = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;

export const MainTitle = styled.Text`
  color: ${colors.textColor};
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${colors.textColor};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 50px;
  text-align: center;
`;

// Styled component for the IconButton
export const IconButton = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
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

