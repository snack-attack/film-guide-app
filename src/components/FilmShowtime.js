import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

function getShowtimeText(showtime) {
  return moment(`${showtime.startsAtDate} ${showtime.startsAtTime}`, 'YYYY-MM-DD HH:mm').calendar();
}

const FilmShowtime = ({ showtime, ...otherProps }) => (
  <Text {...otherProps}>
    {getShowtimeText(showtime)} on {showtime.channel}
  </Text>
);

export default FilmShowtime;
