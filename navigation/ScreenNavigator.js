import { createStackNavigator, createAppContainer } from 'react-navigation';

import ScreenOne from '../screens/ScreenOne';

const ScreenNavigator = createStackNavigator({
   LandingScreen: ScreenOne,

});

export default createAppContainer(ScreenNavigator);

