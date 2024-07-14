// CalendarScreen.js

import React, { useEffect, useState, useContext } from 'react';
import { Modal, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { getDiaryEntries, deleteDiaryEntry } from '../api';

import {
  Container as DiaryContainer,
  EntryText,
  EntryDate,
  Item,
  DeleteButton,
  ButtonText,
  ButtonContainer
} from './styles/StyledDiary';

const Container = styled(DiaryContainer)`
  align-items: center;
  justify-content: center;
`;

const Arrow = ({ direction }) => {
  const iconName = direction === 'left' ? 'chevron-back-outline' : 'chevron-forward-outline';
  return <Ionicons name={iconName} size={24} color="black" />;
};

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
`;

const CalendarScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [markedDates, setMarkedDates] = useState({});
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEntries, setSelectedEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDiaryEntries();
  }, []);

  const fetchDiaryEntries = async () => {
    setLoading(true);
    try {
      const entries = await getDiaryEntries();
      processEntries(entries);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
    setLoading(false);
  };

  const processEntries = (entries) => {
    let newMarkedDates = {};
    entries.forEach(entry => {
      const date = entry.createdAt.split('T')[0];
      newMarkedDates[date] = {
        marked: true,
        dotColor: 'blue',
        activeOpacity: 0.5,
      };
    });
    setDiaryEntries(entries);
    setMarkedDates(newMarkedDates);
  };

  const handleDayPress = (day) => {
    const entriesForDay = diaryEntries.filter(entry => entry.createdAt.split('T')[0] === day.dateString);
    setSelectedEntries(entriesForDay);
    setModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDiaryEntry(id);
      const updatedEntries = diaryEntries.filter(entry => entry.id !== id);
      processEntries(updatedEntries); // Refresh the entries and marked dates
      setModalVisible(false); // Close the modal after deleting
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <Container theme={theme}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <ModalContainer>
            <TouchableWithoutFeedback>
              <ModalContent>
                <ScrollView>
                  {selectedEntries.map((entry, index) => (
                    <Item key={index} style={{ backgroundColor: theme.cardColor }}>
                      <EntryText>{entry.text}</EntryText>
                      <EntryDate>{entry.createdAt}</EntryDate>
                      <ButtonContainer>
                        <DeleteButton onPress={() => handleDelete(entry.id)}>
                          <Ionicons name="trash-outline" size={24} color="white" />
                          <ButtonText>Delete</ButtonText>
                        </DeleteButton>
                      </ButtonContainer>
                    </Item>
                  ))}
                </ScrollView>
              </ModalContent>
            </TouchableWithoutFeedback>
          </ModalContainer>
        </TouchableWithoutFeedback>
      </Modal>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Calendar
          current={new Date().toISOString().split('T')[0]}
          minDate={'2022-01-01'}
          maxDate={'2024-12-31'}
          onDayPress={handleDayPress}
          monthFormat={'yyyy MM'}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          hideDayNames={false}
          showWeekNumbers={true}
          markedDates={markedDates}
          renderArrow={(direction) => <Arrow direction={direction} />}
          enableSwipeMonths={true}
        />
      )}
    </Container>
  );
};

export default CalendarScreen;


