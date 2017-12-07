import React, { Component } from 'react';
import { Linking, Text } from 'react-native';
import FilmDetail from '../components/FilmDetail';
import NavIconButton from '../components/nav/NavIconButton';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { name, imdbUrl } = navigation.state.params.film;
    const openFilmUrl = () => Linking.openURL(imdbUrl);
    return {
      title: name,
      headerRight: (
        <NavIconButton onPress={openFilmUrl}>
          <Text>O</Text>
        </NavIconButton>
      )
    };
  };

  render() {
    const { film } = this.props.navigation.state.params;
    return <FilmDetail film={film} />;
  }
}
