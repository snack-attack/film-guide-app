import { Constants } from 'expo';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import { colors } from './theme';

StatusBar.setBarStyle('light-content');

export default StackNavigator(
  {
    List: { screen: ListScreen },
    Detail: { screen: DetailScreen }
  },
  {
    cardStyle: {
      backgroundColor: colors.white
    },
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        ...Platform.select({
          android: {
            paddingTop: Constants.statusBarHeight,
            height: Constants.statusBarHeight + 56
          }
        })
      },
      headerTintColor: colors.white
    }
  }
);
