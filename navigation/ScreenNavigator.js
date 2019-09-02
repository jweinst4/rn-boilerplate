import { createStackNavigator, createAppContainer } from 'react-navigation';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const ScreenNavigator = createStackNavigator({
   LandingScreen: ScreenOne,
   SecondScreen: ScreenTwo,
   ThirdScreen: ScreenThree,
});

export default createAppContainer(ScreenNavigator);

