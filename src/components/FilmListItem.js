import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

const FilmListItem = ({ film }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{film.name}</Text>
      <Text style={styles.showtime}>
        {film.showtimes[0].startsAtDate} at {film.showtimes[0].startsAtTime} on {film.showtimes[0].channel}
      </Text>
    </View>
    {!!film.tmdbRating && <Text style={styles.rating}>{film.tmdbRating}%</Text>}
    {isIOS && <Text style={styles.accessory}>{'>'}</Text>}
  </View>
);

export default FilmListItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 16
  },
  showtime: {
    fontSize: 14,
    paddingTop: 3,
    color: '#666'
  },
  rating: {
    fontSize: 16,
    paddingLeft: 6
  },
  accessory: {
    paddingLeft: 12,
    fontSize: 16,
    color: '#c0c0c0',
    alignSelf: 'center'
  }
});
