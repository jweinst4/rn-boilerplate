import React from 'react';
import { Text, View } from 'react-native';

const Counter = props => {
  
  return (
    <View>
      <Text>Counter: {props.counter}</Text>
    </View>
  )
};

export default Counter;
