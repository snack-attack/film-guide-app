import { Platform } from 'react-native';

const platform = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
};

const colors = {
  // http://chir.ag/projects/name-that-color/
  white: '#fff',
  concrete: '#f2f2f2',
  silver: '#c0c0c0',
  emperor: '#555'
};

const dimensions = {
  basePadding: 12
};

const fontSizes = {
  small: 14,
  normal: 16
};

export { colors, dimensions, fontSizes, platform };
