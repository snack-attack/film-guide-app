import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFilmsSelector, getFilmsFetchingSelector, actionCreators } from '../store/films';
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
    const { films, isFetching, refresh } = this.props;
    const loading = !!(isFetching && !films.length);
    const refreshing = !!(isFetching && films.length);

    if (loading) {
      return <FilmsLoading />;
    }

    return (
      <FilmList
        films={films}
        onFilmSelected={this.navigateToDetailScreen}
        onRefresh={refresh}
        refreshing={refreshing}
      />
    );
  }
}

const mapStateToProps = state => ({
  films: getFilmsSelector(state),
  isFetching: getFilmsFetchingSelector(state)
});

const mapDispatchToProps = dispatch => ({
  refresh: () => dispatch(actionCreators.fetchFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
