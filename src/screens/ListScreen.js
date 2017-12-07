import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  films: state.films.collection
});

export default connect(mapStateToProps)(ListScreen);
