// screens/Home.js
import React, { useContext } from "react";
import { StyledView, MainTitle, SubTitle, IconButton, IconContainer } from '../screens/styles/StyledHome';
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from '../context/ThemeContext';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
  const { theme, textSize, isDarkMode } = useContext(ThemeContext);

  return (
    <StyledView style={{ backgroundColor: theme.bgColor }}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <MainTitle style={{ color: theme.textColor, fontSize: textSize * 3 }}>Daily Note</MainTitle>
      <SubTitle style={{ color: theme.textColor, fontSize: textSize * 1.25 }}>What's New?🪻</SubTitle>
      <IconButton onPress={() => navigation.navigate("Write")} style={{ backgroundColor: theme.btnColor }}>
        <IconContainer>
          <Ionicons name="star" size={24} color={theme.white} />
        </IconContainer>
      </IconButton>
    </StyledView>
  );
};

export default Home;
