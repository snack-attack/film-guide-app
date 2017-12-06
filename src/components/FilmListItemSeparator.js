import React from 'react';
import { View, StyleSheet } from 'react-native';

const FilmListItemSeparator = () => <View style={styles.container} />;

export default FilmListItemSeparator;

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    height: 1,
    backgroundColor: '#f2f2f2'
  }
});
