import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/EvilIcons';
import { colors } from '../../theme';

const OpenInBrowserIcon = () => <Icon style={styles.icon} name="external-link" />;

export default OpenInBrowserIcon;

const styles = StyleSheet.create({
  icon: {
    fontSize: 34,
    marginTop: 2,
    color: colors.white
  }
});
