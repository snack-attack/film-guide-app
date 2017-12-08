import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { colors, dimensions, fontSizes } from '../theme';

const isIOS = Platform.OS === 'ios';

class FilmListItem extends Component {
  constructor() {
    super();

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { film, onFilmSelected } = this.props;
    onFilmSelected(film);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.film !== this.props.film;
  }

  render() {
    const { film } = this.props;
    return (
      <TouchableHighlight underlayColor={colors.dove} onPress={this.handlePress}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
              {film.name}
            </Text>
            <Text style={styles.showtime} numberOfLines={1} ellipsizeMode={'tail'}>
              {film.showtimes[0].startsAtDate} at {film.showtimes[0].startsAtTime} on {film.showtimes[0].channel}
            </Text>
          </View>
          {!!film.tmdbRating && <Text style={styles.rating}>{film.tmdbRating}%</Text>}
          {isIOS && <Icon style={styles.accessory} name="ios-arrow-forward" />}
        </View>
      </TouchableHighlight>
    );
  }
}

export default FilmListItem;

const styles = StyleSheet.create({
  container: {
    padding: dimensions.basePadding,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: fontSizes.normal
  },
  showtime: {
    fontSize: fontSizes.small,
    paddingTop: dimensions.basePadding / 4,
    color: colors.emperor
  },
  rating: {
    fontSize: fontSizes.normal,
    paddingLeft: dimensions.basePadding / 2
  },
  accessory: {
    paddingLeft: dimensions.basePadding,
    fontSize: fontSizes.normal,
    color: colors.silver,
    paddingTop: 2
  }
});
