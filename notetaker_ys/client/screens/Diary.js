// screens/Diary.js

import React, { useEffect, useState, useContext } from 'react';
import { FlatList, Alert, View, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDiaryEntries, createDiaryEntry, updateDiaryEntry, deleteDiaryEntry } from '../api';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { Container, Input, Button, ButtonText, Item, EntryText, EntryDate, ButtonContainer, EditButton, DeleteButton, ButtonLabelText, SearchBar, SearchContainer } from '../screens/styles/StyledDiary/';
import { StatusBar } from 'expo-status-bar';

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editId, setEditId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useContext(AuthContext);
  const { theme, textSize, isDarkMode } = useContext(ThemeContext);

  const fetchEntries = async () => {
    try {
      const data = await getDiaryEntries();
      const validData = data.filter(item => item.id); // Filter out entries without id
      setEntries(validData);
    } catch (err) {
      Alert.alert('Failed to fetch entries', 'Please check your internet connection and try again.');
      console.error('Failed to fetch entries', err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEntries().then(() => setRefreshing(false));
  };

  const handleCreateOrUpdate = async () => {
    if (text.trim() === '') {
      Alert.alert('Text cannot be empty');
      return;
    }

    if (editId) {
      try {
        await updateDiaryEntry(editId, text);
        setEntries(entries.map(entry => entry.id === editId ? { ...entry, text } : entry));
        setEditId(null);
        setText('');
        Alert.alert('Entry updated');
      } catch (err) {
        Alert.alert('Failed to update entry', 'Please check your internet connection and try again.');
        console.error('Failed to update entry', err);
      }
    } else {
      try {
        const newEntry = await createDiaryEntry(text);
        if (newEntry && newEntry.id) {
          setEntries([...entries, { id: newEntry.id, text, createdAt: new Date().toISOString() }]);
        }
        setText('');
        Alert.alert('Entry created');
      } catch (err) {
        Alert.alert('Failed to create entry', 'Please check your internet connection and try again.');
        console.error('Failed to create entry', err);
      }
    }
  };

  const handleEdit = (entry) => {
    setEditId(entry.id);
    setText(entry.text);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDiaryEntry(id);
      setEntries(entries.filter(entry => entry.id !== id));
      Alert.alert('Entry deleted');
    } catch (err) {
      Alert.alert('Failed to delete entry', 'Please check your internet connection and try again.');
      console.error('Failed to delete entry', err);
    }
  };

  const renderItem = ({ item }) => {
    if (!item || !item.id) return null; // Ensure item is not null or undefined and has an id
    const createdAt = item.createdAt ? new Date(item.createdAt).toString() : 'Unknown Date';
    return (
      <Item theme={theme} textSize={textSize}>
        <EntryText theme={theme} textSize={textSize}>{item.text}</EntryText>
        <EntryDate theme={theme} textSize={textSize - 4}>{createdAt}</EntryDate>
        <ButtonContainer>
          <EditButton onPress={() => handleEdit(item)} theme={theme} textSize={textSize}>
            <Ionicons name="create-outline" size={textSize} color="white" />
            <ButtonLabelText theme={theme} textSize={textSize}>Edit</ButtonLabelText>
          </EditButton>
          <DeleteButton onPress={() => handleDelete(item.id)} theme={theme} textSize={textSize}>
            <Ionicons name="trash-outline" size={textSize} color="white" />
            <ButtonLabelText theme={theme} textSize={textSize}>Delete</ButtonLabelText>
          </DeleteButton>
        </ButtonContainer>
      </Item>
    );
  };

  const keyExtractor = (item) => {
    if (!item || !item.id) {
      console.error('Missing id for item', item);
      return Math.random().toString(36).substring(7); // Generate a random string for missing id
    }
    return item.id.toString();
  };

  const filteredEntries = entries.filter(entry => entry.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container theme={theme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <SearchContainer>
        <Ionicons name="search-outline" size={textSize} color={theme.textColor} />
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search entries..."
          placeholderTextColor={theme.textColor}
          theme={theme}
          textSize={textSize}
        />
      </SearchContainer>
      <Input
        value={text}
        onChangeText={setText}
        placeholder="Take quick notes here..."
        placeholderTextColor={theme.textColor}
        theme={theme}
        textSize={textSize}
      />
      <Button onPress={handleCreateOrUpdate} theme={theme}>
        <ButtonText theme={theme} textSize={textSize}>{editId ? 'Update' : 'Create'}</ButtonText>
      </Button>
      <FlatList
        data={filteredEntries}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Container>
  );
};

export default Diary;
