// // client/App.js
// import React, { useCallback, useEffect, useState, useContext } from 'react';
// import { View, StatusBar } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import Navigator from './navigator';
// import { AuthProvider } from './context/AuthContext';
// import { ThemeProvider, ThemeContext } from './context/ThemeContext';
// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// SplashScreen.preventAutoHideAsync();

// const App = () => {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync(Entypo.font);
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <AuthProvider>
//         <ThemeProvider>
//           <ThemedStatusBar />
//           <Navigator />
//         </ThemeProvider>
//       </AuthProvider>
//     </View>
//   );
// };

// const ThemedStatusBar = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <ExpoStatusBar style={isDarkMode ? 'light' : 'dark'} />
//   );
// };

// export default App;



//


// client/App.js
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Navigator from './navigator';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AuthProvider>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </AuthProvider>
    </View>
  );
};

export default App;
