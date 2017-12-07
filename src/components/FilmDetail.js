import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dimensions, fontSizes, lineHeights, colors } from '../theme';

const GUTTER = dimensions.basePadding / 2;

const FilmDetail = ({ film }) => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.statsContainer}>
        {!!film.year && <Text style={styles.stats}>Released in {film.year}</Text>}
        {!!film.tmdbRating && <Text style={styles.stats}>Rating: {film.tmdbRating}%</Text>}
      </View>
      <View style={styles.showtimesContainer}>
        <Text style={styles.showtimesHeader}>Showtimes:</Text>
        {film.showtimes.map((showtime, idx) => (
          <Text style={styles.showtime} key={idx}>
            {showtime.startsAtDate} at {showtime.startsAtTime} on {showtime.channel}
          </Text>
        ))}
      </View>
      <View style={styles.separator} />
      <Text style={styles.synopsis}>{film.synopsis}</Text>
    </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  stats: {
    fontSize: fontSizes.normal,
    lineHeight: lineHeights.normal,
    paddingVertical: GUTTER
  },
  showtimesContainer: {
    paddingVertical: GUTTER
  },
  showtimesHeader: {
    fontSize: fontSizes.normal,
    lineHeight: lineHeights.normal
  },
  showtime: {
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    paddingTop: GUTTER
  },
  synopsis: {
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    paddingVertical: GUTTER
  },
  separator: {
    backgroundColor: colors.concrete,
    height: 1,
    marginVertical: GUTTER
  }
});
