import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ListScreen extends Component {
  static navigationOptions = {
    title: 'Films on Freeview'
  };

  constructor() {
    super();

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  navigateToDetailScreen() {
    this.props.navigation.navigate('Detail');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.navigateToDetailScreen}
        >
          <Text>Go to Detail Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#aaa'
  }
});
