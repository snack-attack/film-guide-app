import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilmListItem = ({ film }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{film.name}</Text>
  </View>
);

export default FilmListItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16
  }
});
