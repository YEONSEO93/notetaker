// //client/index.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


AppRegistry.registerComponent(appName, () => App);


export { View, Title, TextInput, Btn, BtnText, Emotions, Emotion, EmotionText } from './StyledDiary';
