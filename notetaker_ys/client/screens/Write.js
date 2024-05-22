
// screens/Write.js
import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { View, Title, TextInput, Btn, BtnText, Emotions, Emotion, EmotionText } from '../screens/styles/StyledWrite/';
import { createDiaryEntry } from '../api';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const emotions = ['📚', '🏋️', '💻', '🗓️', '🍽️', '🌎', '🚗'];

const Write = ({ navigation }) => {
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState('');
  const { user } = useContext(AuthContext);
  const { theme, textSize } = useContext(ThemeContext);

  const onChangeText = (text) => setFeelings(text);
  const onEmotionPress = (face) => setEmotion(face);
  const onSubmit = async () => {
    if (feelings === '' || selectedEmotion == null) {
      return Alert.alert('Please complete form.');
    }
    try {
      await createDiaryEntry(`${selectedEmotion} ${feelings}`, user.id);
      Alert.alert('Entry saved');
      navigation.navigate('Diary');
    } catch (err) {
      Alert.alert('Failed to save entry', 'Please check your internet connection and try again.');
      console.error('Failed to save entry', err);
    }
  };

  return (
    <View theme={theme} style={{ padding: 30 }}>
      <Title theme={theme} textSize={textSize}>Take quick notes</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            key={index}
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            theme={theme}
          >
            <EmotionText theme={theme} textSize={textSize + 8}>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        returnKeyType='done'
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={feelings}
        placeholder='Quick notes...'
        placeholderTextColor={theme.textColor}
        theme={theme}
        textSize={textSize}
      />
      <Btn onPress={onSubmit} theme={theme}>
        <BtnText theme={theme} textSize={textSize}>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;
