import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimensions, fontSizes, lineHeights } from '../theme';

const GUTTER = dimensions.basePadding / 2;

const FilmDetail = ({ film }) => (
  <View style={styles.container}>
    <Text style={styles.synopsis}>{film.synopsis}</Text>
  </View>
);

export default FilmDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: GUTTER,
    paddingHorizontal: GUTTER * 2
  },
  synopsis: {
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    paddingVertical: GUTTER
  }
});
