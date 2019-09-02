import React from 'react';
import { View, Text } from 'react-native';


const Counter = props => {

    return (
        <View>
            <Text>Counter: {props.counter}</Text>
            <Text onPress={props.increaseCounterHandler}>Plus</Text>
            <Text onPress={props.decreaseCounterHandler}>Minus</Text>
        </View>
    );
};

export default Counter;
