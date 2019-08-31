import React from 'react';
import { Text, View, Button, Platform } from 'react-native';

import Counter from '../components/Counter';

class ScreenTwo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counterOnTwo: '',
    }
    this.clickedNextOnScreenTwo = this.clickedNextOnScreenTwo.bind(this)
    this.plusOnScreenTwo = this.plusOnScreenTwo.bind(this)
    this.minusOnScreenTwo = this.minusOnScreenTwo.bind(this)
  }

  componentDidMount() {
    console.log(this.props.navigation.getParam('counter'))
    let currentCounter = this.props.navigation.getParam('counter')
    this.setState({ counterOnTwo: currentCounter });
  }

  clickedNextOnScreenTwo() {
    console.log('clicked next on screen one')

    this.props.navigation.navigate({
      routeName: 'ThirdScreen', params: {
        screenId: 'came from screen two',
        counter: this.state.counterOnTwo,
        increaseCounter: this.props.navigation.getParam('increaseCounter'),
        decreaseCounter: this.props.navigation.getParam('decreaseCounter'),
      }
    })
  }

  plusOnScreenTwo() {
    const { params } = this.props.navigation.state;
    params.increaseCounter();
    
  }

  minusOnScreenTwo() {
    const { params } = this.props.navigation.state;
    params.decreaseCounter();
  }

  render() {

console.log(this.props.navigation.getParam('counter'));

    return (
      <View>
        <Text>ScreenTwo</Text>
        <Button title='next' onPress={
          this.clickedNextOnScreenTwo}
        />
        <Text onPress={() => {
          this.plusOnScreenTwo()
        }}>Plus</Text>
        <Text onPress={() => {
          this.minusOnScreenTwo()
        }}>Minus</Text>
        <Text>{this.state.counterOnTwo}</Text>
      </View>
    )
  }
}

ScreenTwo.navigationOptions = {
  headerTitle: 'Screen Two',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'lightblue' : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'lightblue',
}

export default ScreenTwo;
