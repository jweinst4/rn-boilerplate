import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../store/actions/test';

const ScreenOneTest = props => {
    const numberArray = useSelector(state => state.test.numbers);
    const counter = useSelector(state => state.test.counter);

    const dispatch = useDispatch();

    const increaseCounterHandler = useCallback(() => {
        dispatch(increaseCounter(counter));
    }, [dispatch, counter]);

    const decreaseCounterHandler = useCallback(() => {
        dispatch(decreaseCounter(counter));
    }, [dispatch, counter]);

    const nextPage = () => {
        props.navigation.navigate({
            routeName: 'SecondScreen', params: {
                screenId: 'came from screen one',
            }
        })
    }


    return (
        <View>
            <Text>Screen One</Text>
            {numberArray.map((item, index) => {
                return (
                    <View key={item} index={index}>

                        <Text>
                            {item}
                        </Text>
                    </View>

                )
            })}
            <Text>Counter: {counter}</Text>
            <Text onPress={increaseCounterHandler}>Plus</Text>
            <Text onPress={decreaseCounterHandler}>Minus</Text>

            <Button title='click next' onPress={nextPage} />
        </View>
    );
};



export default ScreenOneTest;
