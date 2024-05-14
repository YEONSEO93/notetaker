// // screens/Diary.js

// import React from 'react';
// import { View, Text } from 'react-native';

// const Diary = () => {
//   return (
//     <View>
//       <Text>Diary Screen</Text>
//     </View>
//   );
// };

// export default Diary;



// client/screens/Diary.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getDiaryEntries } from '../api';

const Diary = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await getDiaryEntries();
      setEntries(data);
    };
    fetchEntries();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <Text>{item.createAt}</Text>
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
