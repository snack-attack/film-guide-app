import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

export default StackNavigator(
  {
    List: { screen: ListScreen },
    Detail: { screen: DetailScreen }
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
      }
    }
  }
);
