import { createStackNavigator, createAppContainer } from 'react-navigation';

import ScreenOne from '../components/ScreenOne'
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';
import ScreenFour from '../components/ScreenFour';
import ScreenOneTest from '../components/ScreenOneTest';

const ScreenNavigator = createStackNavigator({
   LandingScreen: ScreenOneTest,
   FourthScreen: ScreenFour,
   SecondScreen: ScreenTwo,
   ThirdScreen: ScreenThree,
});

export default createAppContainer(ScreenNavigator);

