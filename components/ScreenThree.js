import React from 'react';
import { Text, View, Button, Platform } from 'react-native';

import Counter from '../components/Counter';

class ScreenThree extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
  
    }
    this.plusOnScreenThree = this.plusOnScreenThree.bind(this)
    this.minusOnScreenThree = this.minusOnScreenThree.bind(this)
  }

  componentDidMount() {

  }

  plusOnScreenThree() {
    const { params } = this.props.navigation.state;
    params.increaseCounter();
  }

  minusOnScreenThree() {
    const { params } = this.props.navigation.state;
    params.decreaseCounter();
  }

  render() {

    return (
      <View>
        <Text>ScreenThree</Text>
        <Text onPress={() => {
          this.plusOnScreenThree()
        }}>Plus</Text>
        <Text onPress={() => {
          this.minusOnScreenThree()
        }}>Minus</Text>
        <Text>{this.props.navigation.getParam('counter')}</Text>
      </View>
    )
  }
}

ScreenThree.navigationOptions = {
  headerTitle: 'Screen Three',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'lightblue' : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'lightblue',
}

export default ScreenThree;
