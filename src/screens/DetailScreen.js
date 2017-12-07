import React, { Component } from 'react';

import FilmDetail from '../components/FilmDetail';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.state.params.film;
    return {
      title: name
    };
  };

  render() {
    const { film } = this.props.navigation.state.params;
    return <FilmDetail film={film} />;
  }
}
