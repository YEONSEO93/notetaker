
// // client/screens/Diary.js

// import React, { useEffect, useState, useContext } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { getDiaryEntries } from '../api';
// import { AuthContext } from '../context/AuthContext';

// const Diary = () => {
//   const [entries, setEntries] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const data = await getDiaryEntries(user.id);
//         setEntries(data);
//       } catch (err) {
//         console.error('Failed to fetch entries', err);
//       }
//     };
//     fetchEntries();
//   }, [user]);

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text>{item.text}</Text>
//       <Text>{item.createdAt}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       data={entries}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default Diary;



// client/screens/Diary.js

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getDiaryEntries } from '../api';
import { AuthContext } from '../context/AuthContext';

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getDiaryEntries(user.id);
        setEntries(data);
      } catch (err) {
        console.error('Failed to fetch entries', err);
      }
    };
    fetchEntries();
  }, [user]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <Text>{item.createdAt}</Text>
    </View>
  );

  return (
    <FlatList
      data={entries}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Diary;
