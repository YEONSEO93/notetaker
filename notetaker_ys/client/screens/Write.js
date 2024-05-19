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
      Alert.alert('Failed to save entry');
    }
  };

  return (
    <View style={{ backgroundColor: theme.bgColor, flex: 1, padding: 30 }}>
      <Title style={{ color: theme.textColor, fontSize: textSize + 12 }}>Take quick notes</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            key={index}
            style={{
              backgroundColor: theme.white,
              borderColor: emotion === selectedEmotion ? theme.btnColor : 'transparent'
            }}
          >
            <EmotionText style={{ fontSize: textSize + 8 }}>{emotion}</EmotionText>
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
        style={{ backgroundColor: theme.white, color: theme.textColor }}
      />
      <Btn onPress={onSubmit} style={{ backgroundColor: theme.btnColor }}>
        <BtnText style={{ fontSize: textSize, color: '#fff' }}>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;

