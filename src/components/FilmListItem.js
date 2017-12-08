import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilmListItem = ({ film }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{film.name}</Text>
    <Text style={styles.showtime}>
      {film.showtimes[0].startsAtDate} at {film.showtimes[0].startsAtTime} on {film.showtimes[0].channel}
    </Text>
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
  },
  showtime: {
    fontSize: 14,
    paddingTop: 4,
    color: '#555'
  }
});
