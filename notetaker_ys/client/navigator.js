
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./screens/Home";
// import Diary from "./screens/Diary";
// import Setting from "./screens/Setting";
// import { Ionicons } from "@expo/vector-icons";
// import colors from "./colors";

// const Tab = createBottomTabNavigator();

// const CustomTabBarIcon = (name, size, color) => {
//   return <Ionicons name={name} size={size} color={color} />;
// };

// const Navigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         if (route.name === 'Home') {
//           iconName = 'planet-outline';
//         } else if (route.name === 'Diary') {
//           iconName = 'book-outline';
//         } else if (route.name === 'Setting') {
//           iconName = 'ellipsis-horizontal-outline';
//         }

//         // Use a ternary operator to change color if the tab is active
//         const iconColor = focused ? colors.textColor : color;
//         return CustomTabBarIcon(iconName, size, iconColor);
//       },
//       tabBarStyle: {
//         backgroundColor: colors.bgColor // Use your global bgColor
//       }
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Diary" component={Diary} />
//     <Tab.Screen name="Setting" component={Setting} />
//   </Tab.Navigator>
// );

// export default Navigator;



// // basic navigation
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./screens/Home";
// import Write from "./screens/Write";

// const Tabs = createNativeStackNavigator();

// const Navigator = () => (
//   <Tabs.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
//     <Tabs.Screen name="Home" component={Home} />
//     <Tabs.Screen name="Write" component={Write} />
//   </Tabs.Navigator>
// );

// export default Navigator;




// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import Home from "./screens/Home";
// import Write from "./screens/Write";
// import Diary from "./screens/Diary";
// import Setting from "./screens/Setting";
// import colors from "./colors";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const CustomTabBarIcon = (name, size, color) => {
//   return <Ionicons name={name} size={size} color={color} />;
// };

// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         if (route.name === 'Home') {
//           iconName = 'planet-outline';
//         } else if (route.name === 'Diary') {
//           iconName = 'book-outline';
//         } else if (route.name === 'Setting') {
//           iconName = 'ellipsis-horizontal-outline';
//         }

//         // Use a ternary operator to change color if the tab is active
//         const iconColor = focused ? colors.textColor : color;
//         return CustomTabBarIcon(iconName, size, iconColor);
//       },
//       tabBarStyle: {
//         backgroundColor: colors.bgColor // Use your global bgColor
//       }
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Diary" component={Diary} />
//     <Tab.Screen name="Setting" component={Setting} />
//   </Tab.Navigator>
// );

// const Navigator = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
//     <Stack.Screen name="Tabs" component={TabNavigator} />
//     <Stack.Screen name="Write" component={Write} />
//   </Stack.Navigator>
// );

// export default Navigator;




import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Write from "./screens/Write";
import Diary from "./screens/Diary";
import Setting from "./screens/Setting";
import colors from "./colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarIcon = (name, size, color) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'planet-outline';
        } else if (route.name === 'Diary') {
          iconName = 'book-outline';
        } else if (route.name === 'Setting') {
          iconName = 'ellipsis-horizontal-outline';
        }

        // Use a ternary operator to change color if the tab is active
        const iconColor = focused ? colors.textColor : color;
        return CustomTabBarIcon(iconName, size, iconColor);
      },
      tabBarStyle: {
        backgroundColor: colors.bgColor // Use your global bgColor
      }
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Diary" component={Diary} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
);

const Navigator = () => (
  <>
    <StatusBar backgroundColor={colors.bgColor} barStyle="dark-content" />
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Write" component={Write} />
    </Stack.Navigator>
  </>
);


export default Navigator;

