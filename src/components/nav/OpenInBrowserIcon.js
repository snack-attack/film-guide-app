import React from 'react';
import { StyleSheet } from 'react-native';
import EvilIcon from '@expo/vector-icons/EvilIcons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

import { colors, platform } from '../../theme';

const OpenInBrowserIcon = () => {
  if (platform.isIOS) {
    return <EvilIcon style={styles.iconIOS} name="external-link" />;
  }

  return <MaterialIcon style={styles.iconAndroid} name="open-in-new" />;
};

export default OpenInBrowserIcon;

const styles = StyleSheet.create({
  iconIOS: {
    fontSize: 34,
    marginTop: 2,
    color: colors.white
  },
  iconAndroid: {
    fontSize: 28,
    color: colors.white
  }
});
