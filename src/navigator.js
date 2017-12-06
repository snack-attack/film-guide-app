import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';

export default StackNavigator(
  {
    List: { screen: ListScreen }
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
      }
    }
  }
);
