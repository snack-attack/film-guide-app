import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import debounce from 'lodash.debounce';
import { colors, dimensions, fontSizes } from '../theme';
import FilmRating from './FilmRating';
import FilmShowtime from './FilmShowtime';

const isIOS = Platform.OS === 'ios';

class FilmListItem extends Component {
  constructor() {
    super();

    this.handlePress = debounce(this.handlePress.bind(this), 500, { leading: true, trailing: false });
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
            <FilmShowtime
              showtime={film.showtimes[0]}
              style={styles.showtime}
              numberOfLines={1}
              ellipsizeMode={'tail'}
            />
          </View>
          {!!film.tmdbRating && <FilmRating style={styles.rating} rating={film.tmdbRating} />}
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
