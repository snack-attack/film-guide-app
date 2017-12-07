import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const MyComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
