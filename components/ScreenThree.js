import React from 'react';
import { Text, View, Button, Platform } from 'react-native';

import Counter from '../components/Counter';

class ScreenThree extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: '',
    }
    this.plusOnScreenThree = this.plusOnScreenThree.bind(this)
    this.minusOnScreenThree = this.minusOnScreenThree.bind(this)
  }

  componentDidMount() {
    console.log(this.props.navigation.state);
    let currentCounter = this.props.navigation.getParam('counter')
    this.setState({ counter: currentCounter });
  }

  plusOnScreenThree() {
    const { params } = this.props.navigation.state;
    params.increaseCounter();
  }

  minusOnScreenThree() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {

    return (
      <View>
        <Text>ScreenThree</Text>
        <Button title='next' onPress={
          this.clickedNextOnScreenThree}
        />
        <Text onPress={() => {
          this.plusOnScreenThree()
        }}>Plus</Text>
        <Text onPress={() => {
          this.minusOnScreenThree()
        }}>Minus</Text>
        <Counter counter={this.state.counter} />
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
