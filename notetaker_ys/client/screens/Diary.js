// // screens/Diary.js
// import React, { useEffect, useState, useContext } from 'react';
// import { FlatList, Alert } from 'react-native';
// import { getDiaryEntries, createDiaryEntry, updateDiaryEntry, deleteDiaryEntry } from '../api';
// import { AuthContext } from '../context/AuthContext';
// import { ThemeContext } from '../context/ThemeContext';
// import { Container, Input, Button, ButtonText, Item, EntryText, EntryDate, EditButton, DeleteButton } from '../screens/styles/StyledDiary/';
// import { StatusBar } from 'expo-status-bar';

// const Diary = () => {
//   const [entries, setEntries] = useState([]);
//   const [text, setText] = useState('');
//   const [editId, setEditId] = useState(null);
//   const { user } = useContext(AuthContext);
//   const { theme, textSize, isDarkMode } = useContext(ThemeContext);

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const data = await getDiaryEntries();
//         const validData = data.filter(item => item.id); // Filter out entries without id
//         setEntries(validData);
//       } catch (err) {
//         console.error('Failed to fetch entries', err);
//       }
//     };
//     fetchEntries();
//   }, []);

//   const handleCreateOrUpdate = async () => {
//     if (text.trim() === '') {
//       Alert.alert('Text cannot be empty');
//       return;
//     }

//     if (editId) {
//       try {
//         await updateDiaryEntry(editId, text);
//         setEntries(entries.map(entry => entry.id === editId ? { ...entry, text } : entry));
//         setEditId(null);
//         setText('');
//         Alert.alert('Entry updated');
//       } catch (err) {
//         console.error('Failed to update entry', err);
//       }
//     } else {
//       try {
//         const newEntry = await createDiaryEntry(text);
//         if (newEntry && newEntry.id) {
//           setEntries([...entries, { id: newEntry.id, text, createdAt: new Date().toISOString() }]);
//         }
//         setText('');
//         Alert.alert('Entry created');
//       } catch (err) {
//         console.error('Failed to create entry', err);
//       }
//     }
//   };

//   const handleEdit = (entry) => {
//     setEditId(entry.id);
//     setText(entry.text);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteDiaryEntry(id);
//       setEntries(entries.filter(entry => entry.id !== id));
//       Alert.alert('Entry deleted');
//     } catch (err) {
//       console.error('Failed to delete entry', err);
//     }
//   };

//   const renderItem = ({ item }) => {
//     if (!item || !item.id) return null; // Ensure item is not null or undefined and has an id
//     const createdAt = item.createdAt ? new Date(item.createdAt).toString() : 'Unknown Date';
//     return (
//       <Item style={{ backgroundColor: theme.bgColor_light }}>
//         <EntryText style={{ color: theme.textColor }}>{item.text}</EntryText>
//         <EntryDate style={{ color: theme.textColor }}>{createdAt}</EntryDate>
//         <EditButton onPress={() => handleEdit(item)} style={{ color: theme.btnColor, fontWeight: 'bold' }}>Edit</EditButton>
//         <DeleteButton onPress={() => handleDelete(item.id)} style={{ color: 'red', fontWeight: 'bold' }}>Delete</DeleteButton>
//       </Item>
//     );
//   };

//   const keyExtractor = (item) => {
//     if (!item || !item.id) {
//       console.error('Missing id for item', item);
//       return Math.random().toString(36).substring(7); // Generate a random string for missing id
//     }
//     return item.id.toString();
//   };

//   return (
//     <Container style={{ backgroundColor: theme.bgColor }}>
//       <StatusBar style={isDarkMode ? 'light' : 'dark'} />
//       <Input
//         value={text}
//         onChangeText={setText}
//         placeholder="Take quick notes here..."
//         placeholderTextColor={theme.textColor}
//         style={{ color: theme.textColor, fontSize: textSize }}
//       />
//       <Button onPress={handleCreateOrUpdate} style={{ backgroundColor: theme.btnColor }}>
//         <ButtonText style={{ fontSize: textSize }}>{editId ? 'Update' : 'Create'}</ButtonText>
//       </Button>
//       <FlatList
//         data={entries}
//         renderItem={renderItem}
//         keyExtractor={keyExtractor}
//       />
//     </Container>
//   );
// };

// export default Diary;




// screens/Diary.js
import React, { useEffect, useState, useContext } from 'react';
import { FlatList, Alert } from 'react-native';
import { getDiaryEntries, createDiaryEntry, updateDiaryEntry, deleteDiaryEntry } from '../api';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { Container, Input, Button, ButtonText, Item, EntryText, EntryDate, EditButton, DeleteButton } from '../screens/styles/StyledDiary/';
import { StatusBar } from 'expo-status-bar';

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const { user } = useContext(AuthContext);
  const { theme, textSize, isDarkMode } = useContext(ThemeContext);

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
      <Item style={{ backgroundColor: theme.bgColor_light }} theme={theme} textSize={textSize}>
        <EntryText style={{ color: theme.textColor }} theme={theme} textSize={textSize}>{item.text}</EntryText>
        <EntryDate style={{ color: theme.textColor }} theme={theme} textSize={textSize - 4}>{createdAt}</EntryDate>
        <EditButton onPress={() => handleEdit(item)} theme={theme} textSize={textSize} style={{ color: theme.btnColor, fontWeight: 'bold' }}>Edit</EditButton>
        <DeleteButton onPress={() => handleDelete(item.id)} theme={theme} textSize={textSize} style={{ color: 'red', fontWeight: 'bold' }}>Delete</DeleteButton>
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

  return (
    <Container style={{ backgroundColor: theme.bgColor }} theme={theme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Input
        value={text}
        onChangeText={setText}
        placeholder="Take quick notes here..."
        placeholderTextColor={theme.textColor}
        theme={theme}
        textSize={textSize}
        style={{ color: theme.textColor }}
      />
      <Button onPress={handleCreateOrUpdate} theme={theme}>
        <ButtonText theme={theme} textSize={textSize}>{editId ? 'Update' : 'Create'}</ButtonText>
      </Button>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default Diary;
