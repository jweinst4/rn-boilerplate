import React, { useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { increaseCounter, decreaseCounter, addSubmittedString, deleteSubmittedString } from '../store/actions/test';

import DisplayArray from '../components/DisplayArray'
import DisplayObject from '../components/DisplayObject'
import Counter from '../components/Counter';
import TextInputForm from '../components/TextInputForm';

const ScreenTwo = props => {
    const numberArray = useSelector(state => state.test.numbers);
    const counter = useSelector(state => state.test.counter);
    const submittedStrings = useSelector(state => state.test.enteredString);
    const [enteredString, setEnteredString] = useState('');

    const dispatch = useDispatch();

    const increaseCounterHandler = useCallback(() => {
        dispatch(increaseCounter(counter));
    }, [dispatch, counter]);

    const decreaseCounterHandler = useCallback(() => {
        dispatch(decreaseCounter(counter));
    }, [dispatch, counter]);

    const addSubmittedStringHandler = useCallback(() => {
        setEnteredString('');
        dispatch(addSubmittedString(enteredString));
    }, [dispatch, enteredString])
        ;

    const deletedStringHandler = useCallback((item) => {
        dispatch(deleteSubmittedString(item));
    }, [dispatch, enteredString]);

    const nextPage = () => {
        props.navigation.navigate({
            routeName: 'ThirdScreen', params: {
                screenId: 'came from screen two',
            }
        })
    }

    const stringInputHandler = enteredText => {
        setEnteredString(enteredText);
    };

    return (
        <View>
            <Text>Screen Two</Text>
            <DisplayArray outputArray={numberArray} />
            <Counter counter={counter} increaseCounterHandler={increaseCounterHandler} decreaseCounterHandler={decreaseCounterHandler} />

            <Button title='click next' onPress={nextPage} />

            <TextInputForm stringInputHandler={stringInputHandler} enteredString={enteredString} addSubmittedStringHandler={addSubmittedStringHandler}
            />

            <DisplayObject outputArray={submittedStrings} deletedStringHandler={deletedStringHandler} />
        </View>
    );
};

export default ScreenTwo;
