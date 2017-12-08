import React, { Component } from 'react';
import { View, SectionList, RefreshControl, StyleSheet } from 'react-native';

import FilmListItem from './FilmListItem';
import FilmListItemHeader from './FilmListItemHeader';
import FilmListItemSeparator from './FilmListItemSeparator';

export default class FilmList extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    const { onFilmSelected } = this.props;
    return <FilmListItem film={item} onFilmSelected={onFilmSelected} />;
  }

  renderSectionHeader({ section }) {
    return <FilmListItemHeader day={section.day} />;
  }

  render() {
    const { films, refreshing, onRefresh } = this.props;
    return (
      <View style={styles.container}>
        <SectionList
          sections={films}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={FilmListItemSeparator}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
