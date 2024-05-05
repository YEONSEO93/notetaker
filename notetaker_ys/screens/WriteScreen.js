import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native"; // Import TouchableOpacity

const View = styled.View``;
const Text = styled.Text``;

const WriteScreen = ({ navigation }) => (
  <View>
    <Text>Write</Text>
    <TouchableOpacity onPress={() => navigation.navigate('WriteScreen')}>
      <Text>Go to Write Screen</Text>
    </TouchableOpacity>
  </View>
);

