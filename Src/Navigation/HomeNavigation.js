import { createStackNavigator } from 'react-navigation-stack';
// import MainContainer from './BottomTabNavigation';
import Feed from '../Screens/Feed';

const HomeNavigation = createStackNavigator(
  {
    Feed: { screen: Feed }
  },

  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none'

  },
);
export default HomeNavigation;
