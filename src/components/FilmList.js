import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import FilmListItem from './FilmListItem';
import FilmListItemSeparator from './FilmListItemSeparator';

export default class FilmList extends Component {
  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    return <FilmListItem film={item} />;
  }

  render() {
    const { films } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={films}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={FilmListItemSeparator}
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
