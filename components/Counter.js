import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Counter = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Counter: {props.counter}</Text>
            <View style={styles.counterOperatorContainer}>
                <Icon onPress={props.decreaseCounterHandler} name="minus" style={styles.displayOperator} size={30} color='black' />
                <Icon onPress={props.increaseCounterHandler} name="plus" style={styles.displayOperator} size={30} color='black' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
    },
    counter: {
        width: '50%',
        textAlign: 'center',
        fontSize: 24,
    },
    counterOperatorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    displayOperator: {
        width: '20%',
        justifyContent: 'center',
        textAlign: 'center',
    }
});

export default Counter;
