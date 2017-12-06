import React, { Component } from 'react';

import films from '../data/films.json';
import FilmList from '../components/FilmList';

export default class ListScreen extends Component {
  static navigationOptions = {
    title: 'Films on Freeview'
  };

  constructor() {
    super();

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  navigateToDetailScreen(film) {
    this.props.navigation.navigate('Detail', {
      title: film.name
    });
  }

  render() {
    return (
      <FilmList films={films} onFilmSelected={this.navigateToDetailScreen} />
    );
  }
}
