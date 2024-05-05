// components/CustomHome.js
import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 35px;
  margin-bottom: 100px;
  font-weight: bold;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  elevation: 5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const CustomHome = ({ navigation }) => (
  <View>
    <Title>My Diary 😙🌷</Title>
    <Btn onPress={() => navigation.navigate("Write")}>
      <Ionicons name="star" color="white" size={30} />
    </Btn>
  </View>
);
export default CustomHome;
