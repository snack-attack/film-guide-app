import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFilmsSelector } from '../store/films';
import FilmList from '../components/FilmList';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Films on Freeview'
  };

  constructor() {
    super();

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  navigateToDetailScreen(film) {
    this.props.navigation.navigate('Detail', {
      film
    });
  }

  render() {
    const { films } = this.props;
    return <FilmList films={films} onFilmSelected={this.navigateToDetailScreen} />;
  }
}

const mapStateToProps = state => ({
  films: getFilmsSelector(state)
});

export default connect(mapStateToProps)(ListScreen);
