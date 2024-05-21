
import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./LoginScreen"; // Import LoginScreen component
import { ThemeContext } from "../context/ThemeContext";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  height: 60px;
`;

const IconContainer = styled.TouchableOpacity`
  width: ${(props) => props.iconSize}px;
  height: ${(props) => props.iconSize}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: ${(props) => props.iconSize / 2}px;
`;

const TabLabel = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.textSize}px;
  text-align: center;
`;

const BottomTab = () => {
  const navigation = useNavigation();
  const { theme, textSize } = useContext(ThemeContext);
  const [showLogin, setShowLogin] = useState(false); // State to control login screen visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Added authentication state

  const goToScreen = (screenName) => {
    if (screenName === "AccountDetails") {
      // If user is not authenticated, show login screen
      if (!isAuthenticated) {
        setShowLogin(true);
        return;
      }
    }
    navigation.navigate(screenName);
  };

  const handleLoginSuccess = () => {
    // Handle login success (e.g., set isAuthenticated to true)
    setShowLogin(false);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Handle logout (e.g., clear authentication status)
    setIsAuthenticated(false);
  };

  const iconSize = textSize * 1.2;

  return (
    <>
      <Container theme={theme}>
        <IconContainer onPress={() => goToScreen("Home")} theme={theme} iconSize={iconSize}>
          <Ionicons name="planet-outline" size={iconSize} color={theme.textColor} />
          <TabLabel theme={theme} textSize={textSize}>Home</TabLabel>
        </IconContainer>
        <IconContainer onPress={() => goToScreen("Diary")} theme={theme} iconSize={iconSize}>
          <Ionicons name="book-outline" size={iconSize} color={theme.textColor} />
          <TabLabel theme={theme} textSize={textSize}>Diary</TabLabel>
        </IconContainer>
        <IconContainer onPress={() => goToScreen("Setting")} theme={theme} iconSize={iconSize}>
          <Ionicons name="ellipsis-horizontal-outline" size={iconSize} color={theme.textColor} />
          <TabLabel theme={theme} textSize={textSize}>Setting</TabLabel>
        </IconContainer>
      </Container>
      {showLogin && <LoginScreen onSuccess={handleLoginSuccess} />}
    </>
  );
};

export default BottomTab;
