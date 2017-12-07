import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { dimensions } from '../../theme';

const NavIconButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default NavIconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.navbarHeight,
    height: dimensions.navbarHeight
  }
});
