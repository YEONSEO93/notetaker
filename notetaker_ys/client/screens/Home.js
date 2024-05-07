
// import React from "react";
// import { StyledView, MainTitle, SubTitle, IconButton } from './StyledHome';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import { Ionicons } from "@expo/vector-icons";
// // import styled from "styled-components/native";
// const Home = ({ navigation }) => (
//   <StyledView>
//     <MainTitle>Notetaker</MainTitle>
//     <SubTitle>CreatedBy 연서🪻</SubTitle>
//     <IconButton 
//       icon="star" 
//       onPress={() => navigation.navigate("Write")}
//     />
//   </StyledView>
// );

// export default Home;


import React from "react";
import { StyledView, MainTitle, SubTitle, IconButton, IconContainer } from './StyledHome';
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors"; 

const Home = ({ navigation }) => (
  <StyledView>
    <MainTitle>Notetaker</MainTitle>
    <SubTitle>CreatedBy 연서🪻</SubTitle>
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
