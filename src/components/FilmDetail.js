import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { dimensions, fontSizes, lineHeights, colors } from '../theme';

const GUTTER = dimensions.basePadding / 2;

const FilmDetail = ({ film }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${film.tmdbImageId}.jpg`
        }}
      />
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
    flex: 1
  },
  scrollContainer: {
    paddingVertical: GUTTER,
    paddingHorizontal: GUTTER * 2
  },
  image: {
    aspectRatio: 0.75,
    resizeMode: 'cover'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: dimensions.basePadding
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
