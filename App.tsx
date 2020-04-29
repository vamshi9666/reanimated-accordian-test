import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stack from './components/Stack';

const listData = [
  {name: 'Nathaniel Fitzgerald', points: '$3.45'},
  {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
  {name: 'Jacob Mullins', points: '$3.45'},
  {name: 'Jesus Lewis', points: '$3.45'},
  {name: 'Johnny Marr', points: '$2.56'},
];
export default function App() {
  return (
    <View style={styles.container}>
      <Stack list={listData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
