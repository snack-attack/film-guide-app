import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../theme';

const FilmListItemHeader = ({ day }) => <Text style={styles.text}>{day}</Text>;

export default FilmListItemHeader;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: dimensions.basePadding,
    paddingVertical: dimensions.basePadding,
    backgroundColor: colors.concrete,
    color: colors.emperor,
    fontSize: fontSizes.normal
  }
});
