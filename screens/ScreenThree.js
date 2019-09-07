import React, { useCallback, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { increaseCounter, decreaseCounter, addSubmittedString, deleteSubmittedString } from '../store/actions/test';

import DisplayObject from '../components/DisplayObject'
import Counter from '../components/Counter';
import TextInputForm from '../components/TextInputForm';

const ScreenThree = props => {
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

    const previousPage = () => {
        props.navigation.navigate({
            routeName: 'SecondScreen', params: {
                screenId: 'came from screen three',
            }
        })
    }

    const stringInputHandler = enteredText => {
        setEnteredString(enteredText);
    };

    return (
        <View style={styles.container}>
            <View style={styles.counterAndInputContainer}>
                <View style={styles.counterContainer} >
                    <Counter style={styles.counter} counter={counter} increaseCounterHandler={increaseCounterHandler} decreaseCounterHandler={decreaseCounterHandler} />
                </View>

                <View style={styles.inputFormAndDisplayContainer}>
                    <TextInputForm stringInputHandler={stringInputHandler} enteredString={enteredString} addSubmittedStringHandler={addSubmittedStringHandler}
                    />
                    <DisplayObject outputArray={submittedStrings} deletedStringHandler={deletedStringHandler} />
                </View>
            </View>
            <View>
                <Text onPress={previousPage} style={styles.previousPage}> <Icon name="caret-left" size={18} color='black' />  Previous Page </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 24,
    },
    counterAndInputContainer: {
        flex: 1,
    },
    counterContainer: {
        height: '30%',
        borderWidth: 3,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'lightblue',
        marginVertical: 60,
    },
    inputFormAndDisplayContainer: {
        height: '30%',
        borderWidth: 3,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: 'lightblue',
    },
    previousPage: {
        position: 'absolute',
        bottom: 120,
        left: 0,
        color: 'black',
        fontSize: 18,
    }
});

ScreenThree.navigationOptions = navData => {
    return {
        headerTitle: 'Screen Three',
    };
};


export default ScreenThree;
