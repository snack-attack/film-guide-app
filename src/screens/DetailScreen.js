import React, { Component } from 'react';
import { Linking } from 'react-native';
import FilmDetail from '../components/FilmDetail';
import NavIconButton from '../components/nav/NavIconButton';
import OpenInBrowserIcon from '../components/nav/OpenInBrowserIcon';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { name, imdbUrl } = navigation.state.params.film;
    const openFilmUrl = () => Linking.openURL(imdbUrl);
    return {
      title: name,
      headerRight: (
        <NavIconButton onPress={openFilmUrl}>
          <OpenInBrowserIcon />
        </NavIconButton>
      )
    };
  };

  render() {
    const { film } = this.props.navigation.state.params;
    return <FilmDetail film={film} />;
  }
}
