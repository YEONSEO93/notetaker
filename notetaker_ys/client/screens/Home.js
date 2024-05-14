
import React from "react";
import { StyledView, MainTitle, SubTitle, IconButton, IconContainer } from './StyledHome';
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors"; 

const Home = ({ navigation }) => (
  <StyledView>
    <MainTitle>Notetaker</MainTitle>
    <SubTitle>CreatedBy Yeonseo🪻</SubTitle>
    <IconButton 
      onPress={() => navigation.navigate("Write")}
    >
      <IconContainer>
        <Ionicons name="star" size={24} color={colors.textColor} />
      </IconContainer>
    </IconButton>
  </StyledView>
);

export default Home;
