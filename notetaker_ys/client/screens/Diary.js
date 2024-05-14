
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { getDiaryEntries, createDiaryEntry, updateDiaryEntry, deleteDiaryEntry } from '../api';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const { user } = useContext(AuthContext);
  const { theme, textSize } = useContext(ThemeContext);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getDiaryEntries();
        const validData = data.filter(item => item.id); // Filter out entries without id
        setEntries(validData);
      } catch (err) {
        console.error('Failed to fetch entries', err);
      }
    };
    fetchEntries();
  }, []);

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
      console.error('Failed to delete entry', err);
    }
  };

  const renderItem = ({ item }) => {
    if (!item || !item.id) return null; // Ensure item is not null or undefined and has an id
    const createdAt = item.createdAt ? new Date(item.createdAt).toString() : 'Unknown Date';
    return (
      <View style={styles.item}>
        <Text style={styles.entryText}>{item.text}</Text>
        <Text style={styles.entryDate}>{createdAt}</Text>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = (item) => {
    if (!item || !item.id) {
      console.error('Missing id for item', item);
      return Math.random().toString(36).substring(7); // Generate a random string for missing id
    }
    return item.id.toString();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bgColor,
      padding: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: theme.cardColor,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: theme.cardColor,
      color: theme.textColor,
    },
    button: {
      width: '100%',
      paddingVertical: 10,
      backgroundColor: theme.btnColor,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    item: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.btnColor,
      backgroundColor: theme.cardColor,
      borderRadius: 5,
      marginVertical: 5,
    },
    entryText: {
      color: theme.textColor,
      fontSize: textSize,
    },
    entryDate: {
      color: theme.textColor,
      fontSize: textSize - 4,
      marginTop: 5,
    },
    editButton: {
      color: theme.btnColor,
      marginTop: 10,
    },
    deleteButton: {
      color: 'red',
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your feelings..."
        value={text}
        onChangeText={setText}
        placeholderTextColor={theme.textColor}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateOrUpdate}>
        <Text style={styles.buttonText}>{editId ? 'Update' : 'Create'}</Text>
      </TouchableOpacity>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Diary;
