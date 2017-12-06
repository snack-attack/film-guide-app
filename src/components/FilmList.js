import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import FilmListItem from './FilmListItem';
import FilmListItemSeparator from './FilmListItemSeparator';

export default class FilmList extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    const { onFilmSelected } = this.props;
    return <FilmListItem film={item} onFilmSelected={onFilmSelected} />;
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
