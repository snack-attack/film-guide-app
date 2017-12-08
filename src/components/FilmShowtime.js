import React from 'react';
import { Text } from 'react-native';

function getShowtimeText(showtime) {
  return showtime.startsAtMoment.calendar();
}

const FilmShowtime = ({ showtime, ...otherProps }) => (
  <Text {...otherProps}>
    {getShowtimeText(showtime)} on {showtime.channel}
  </Text>
);

export default FilmShowtime;
