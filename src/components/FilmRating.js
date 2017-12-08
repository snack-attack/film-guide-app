import React from 'react';
import { Text } from 'react-native';
import { colors } from '../theme';

function getRatingColor(rating) {
  if (rating >= 60) {
    return colors.rating.good;
  }

  if (rating >= 50) {
    return colors.rating.average;
  }

  return colors.rating.poor;
}

const FilmRating = ({ rating, style, ...otherProps }) => (
  <Text style={[style, { color: getRatingColor(rating) }]} {...otherProps}>
    {rating}%
  </Text>
);

export default FilmRating;
