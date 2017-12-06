import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class FilmList extends Component {
  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    return <Text>{item.name}</Text>;
  }

  render() {
    const { films } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={films}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
