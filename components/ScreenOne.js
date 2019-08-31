import React from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';


const ScreenOne = props => {
    const numberArray = [{ key: 'a', value: 2 }, { key: 'b', value: 4 }, { key: 'c', value: 6 }];

    const clickedNextOnScreenOne = () => {
        console.log('clicked next on screen one')
        props.navigation.navigate({ routeName: 'SecondScreen' })
    }

    const pressedFlatListItem = (item) => {
        console.log(item)
    }


    return (
        <View>
            <Text style={styles.text}>ScreenOne</Text>
            <FlatList
                data={numberArray}
                renderItem={({ item }) => <Text onPress={() => {
                    pressedFlatListItem(item.value)
                }}>{item.value}</Text>}
            />
            <Button title='next' onPress={
                clickedNextOnScreenOne}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
    }
});

export default ScreenOne;
