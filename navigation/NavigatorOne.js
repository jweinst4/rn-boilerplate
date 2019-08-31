import { createStackNavigator, createAppContainer } from 'react-navigation';

import ScreenOne from '../components/ScreenOne'
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';

const ScreenNavigator = createStackNavigator({
   LandingScreen:  ScreenOne,
   SecondScreen: ScreenTwo,
   ThirdScreen: ScreenThree,
});

export default createAppContainer(ScreenNavigator);

