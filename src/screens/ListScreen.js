import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFilmsSelector, getFilmsFetchingSelector } from '../store/films';
import FilmList from '../components/FilmList';
import FilmsLoading from '../components/FilmsLoading';

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
    const { films, isFetching } = this.props;
    if (isFetching) {
      return <FilmsLoading />;
    }

    return <FilmList films={films} onFilmSelected={this.navigateToDetailScreen} />;
  }
}

const mapStateToProps = state => ({
  films: getFilmsSelector(state),
  isFetching: getFilmsFetchingSelector(state)
});

export default connect(mapStateToProps)(ListScreen);
