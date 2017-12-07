import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { colors } from '../../theme';

const OpenInBrowserIcon = () => <Icon style={styles.icon} name="open-in-new" />;

export default OpenInBrowserIcon;

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    color: colors.white
  }
});
