
// client/screens/Write.js
import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { createDiaryEntry } from '../api';
import { AuthContext } from '../context/AuthContext';
import colors from '../colors';

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 30px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Emotion = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? 'rgba(41, 30, 95, 1);' : 'transparent'};
`;
const EmotionText = styled.Text`
  font-size: 24px;
`;

const emotions = ['📚', '🏋️', '💻', '🗓️', '🍽️', '🌎', '🚗'];

const Write = ({ navigation }) => {
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState('');
  const { user } = useContext(AuthContext);

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
    <View>
      <Title>Take quick notes</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            key={index}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        returnKeyType='done'
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={feelings}
        placeholder='Quick notes...'
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};
export default Write;
