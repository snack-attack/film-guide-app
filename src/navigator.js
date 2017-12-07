import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import { colors, platform } from './theme';

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
        marginTop: platform.isAndroid ? Constants.statusBarHeight : 0
      }
    }
  }
);
