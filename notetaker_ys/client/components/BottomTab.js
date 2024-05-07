import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.bgColor || "#fff"};
  height: 60px;
`;

const IconContainer = styled.TouchableOpacity`
  width: 50px;  // Set a specific width
  height: 50px; // Set a specific height
  align-items: center; // Center the icon horizontally
  justify-content: center; // Center the icon vertically
  background-color: #eee; // Temporary background color for visibility
`;

const BottomTab = () => {
  const navigation = useNavigation();

  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Container>
      <IconContainer onPress={() => goToScreen("Home")}>
        <Ionicons name="planet-outline" size={24} color="#000" />
      </IconContainer>
      <IconContainer onPress={() => goToScreen("Diary")}>
        <Ionicons name="book-outline" size={24} color="#000" />
      </IconContainer>
      <IconContainer onPress={() => goToScreen("Setting")}>
        <Ionicons name="ellipsis-horizontal-outline" size={24} color="#000" />
      </IconContainer>
    </Container>
  );
};


export default BottomTab;
