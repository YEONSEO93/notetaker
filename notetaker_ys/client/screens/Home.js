
// import React, { useContext } from "react";
// import { StyledView, MainTitle, SubTitle, IconButton, IconContainer } from '../screens/styles/StyledHome/';
// import { Ionicons } from "@expo/vector-icons";
// import { ThemeContext } from '../context/ThemeContext';
// import { StatusBar } from 'expo-status-bar';

// const Home = ({ navigation }) => {
//   const { theme, textSize } = useContext(ThemeContext);

//   return (
//     <StyledView style={{ backgroundColor: theme.bgColor }}>
//       <StatusBar style={theme.isDarkMode ? 'light' : 'dark'} />
//       <MainTitle style={{ color: theme.textColor }}>Notetaker</MainTitle>
//       <SubTitle style={{ color: theme.textColor }}>CreatedBy Yeonseo🪻</SubTitle>
//       <IconButton onPress={() => navigation.navigate("Write")} style={{ backgroundColor: theme.btnColor }}>
//         <IconContainer>
//           <Ionicons name="star" size={24} color={theme.white} />
//         </IconContainer>
//       </IconButton>
//     </StyledView>
//   );
// };

// export default Home;



///


import React, { useContext } from "react";
import { StyledView, MainTitle, SubTitle, IconButton, IconContainer } from '../screens/styles/StyledHome';
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from '../context/ThemeContext';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
  const { theme, textSize } = useContext(ThemeContext);

  return (
    <StyledView style={{ backgroundColor: theme.bgColor }}>
      <StatusBar style={theme.isDarkMode ? 'light' : 'dark'} />
      <MainTitle style={{ color: theme.textColor, fontSize: textSize * 3 }}>Notetaker</MainTitle>
      <SubTitle style={{ color: theme.textColor, fontSize: textSize * 1.25 }}>Created By Yeonseo🪻</SubTitle>
      <IconButton onPress={() => navigation.navigate("Write")} style={{ backgroundColor: theme.btnColor }}>
        <IconContainer>
          <Ionicons name="star" size={24} color={theme.white} />
        </IconContainer>
      </IconButton>
    </StyledView>
  );
};

export default Home;
