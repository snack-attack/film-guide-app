import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dimensions, colors } from '../theme';

const FilmListItemSeparator = () => <View style={styles.container} />;

export default FilmListItemSeparator;

const styles = StyleSheet.create({
  container: {
    marginLeft: dimensions.basePadding,
    height: 1,
    backgroundColor: colors.concrete
  }
});
