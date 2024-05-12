// import React from "react";
// import styled from "styled-components/native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const Container = styled.View`
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   background-color: ${(props) => props.bgColor || "#fff"};
//   height: 60px;
// `;

// const IconContainer = styled.TouchableOpacity`
//   width: 50px;  // Set a specific width
//   height: 50px; // Set a specific height
//   align-items: center; // Center the icon horizontally
//   justify-content: center; // Center the icon vertically
//   background-color: #eee; // Temporary background color for visibility
// `;

// const BottomTab = () => {
//   const navigation = useNavigation();

//   const goToScreen = (screenName) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     <Container>
//       <IconContainer onPress={() => goToScreen("Home")}>
//         <Ionicons name="planet-outline" size={24} color="#000" />
//       </IconContainer>
//       <IconContainer onPress={() => goToScreen("Diary")}>
//         <Ionicons name="book-outline" size={24} color="#000" />
//       </IconContainer>
//       <IconContainer onPress={() => goToScreen("Setting")}>
//         <Ionicons name="ellipsis-horizontal-outline" size={24} color="#000" />
//       </IconContainer>
//     </Container>
//   );
// };


// export default BottomTab;



import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./LoginScreen"; // Import LoginScreen component

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.bgColor || "#fff"};
  height: 60px;
`;

const IconContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const BottomTab = () => {
  const navigation = useNavigation();
  const [showLogin, setShowLogin] = useState(false); // State to control login screen visibility

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
    // For demonstration purposes, let's assume login is successful
    setShowLogin(false);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Handle logout (e.g., clear authentication status)
    // For demonstration purposes, let's assume logout is successful
    setIsAuthenticated(false);
  };

  return (
    <>
      <Container>
        <IconContainer onPress={() => goToScreen("Home")}>
          <Ionicons name="planet-outline" size={24} color="#000" />
        </IconContainer>
        <IconContainer onPress={() => goToScreen("Diary")}>
          <Ionicons name="book-outline" size={24} color="#000" />
        </IconContainer>
        <IconContainer onPress={() => goToScreen("Setting")}>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color="#000"
          />
        </IconContainer>
      </Container>
      {showLogin && <LoginScreen onSuccess={handleLoginSuccess} />}
    </>
  );
};

export default BottomTab;
