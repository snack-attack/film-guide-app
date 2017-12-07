import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dimensions, fontSizes, lineHeights } from '../theme';

const GUTTER = dimensions.basePadding / 2;

const FilmDetail = ({ film }) => (
  <View style={styles.container}>
    <View style={styles.statsContainer}>
      {!!film.year && <Text style={styles.stats}>Released in {film.year}</Text>}
      {!!film.tmdbRating && <Text style={[styles.stats, styles.rating]}>Rating: {film.tmdbRating}%</Text>}
    </View>
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
  statsContainer: {
    flexDirection: 'row'
  },
  stats: {
    fontSize: fontSizes.normal,
    lineHeight: lineHeights.normal,
    paddingVertical: GUTTER,
    flex: 1
  },
  rating: {
    textAlign: 'right'
  },
  synopsis: {
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    paddingVertical: GUTTER
  }
});
