import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilmListItem = ({ film }) => (
  <View style={styles.container}>
    <Text>{film.name}</Text>
  </View>
);

export default FilmListItem;

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center'
  }
});
