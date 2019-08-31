import React from 'react';
import { Text, Button, View, FlatList, Platform } from 'react-native';

import Counter from '../components/Counter';

class ScreenOne extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            numberArray: [{ key: 'a', value: 2 }, { key: 'b', value: 4 }, { key: 'c', value: 6 }],
        }
        this.clickedNextOnScreenOne = this.clickedNextOnScreenOne.bind(this)
        this.plusOnScreenOne = this.plusOnScreenOne.bind(this)
        this.minusOnScreenOne = this.minusOnScreenOne.bind(this)
    }
    componentDidMount() {

    }

    clickedNextOnScreenOne() {
        console.log('clicked next on screen one')

        this.props.navigation.navigate({
            routeName: 'SecondScreen', params: {
                screenId: 'came from screen one',
                counter: this.state.counter,
                increaseCounter: this.plusOnScreenOne,
                decreaseCounter: this.minusOnScreenOne,
            }
        })
    }

    plusOnScreenOne() {
        this.setState({ counter: this.state.counter + 1 })
        console.log('clicked plus on 1')
    }

    minusOnScreenOne() {
        this.setState({ counter: this.state.counter - 1 })
        console.log('clicked minus on 1')
    }

    render() {

        return (
            <View>
                <Text>ScreenOne</Text>
                <FlatList
                    data={this.state.numberArray}
                    renderItem={({ item }) => <Text onPress={() => {
                        pressedFlatListItem(item.value)
                    }}>{item.value}</Text>}
                />
                <Button title='next' onPress={
                    this.clickedNextOnScreenOne}
                />
                <Text onPress={() => {
                    this.plusOnScreenOne()
                }}>Plus</Text>
                <Text onPress={() => {
                    this.minusOnScreenOne()
                }}>Minus</Text>
                <Counter counter={this.state.counter} />

            </View>
        )
    }
}



ScreenOne.navigationOptions = {
    headerTitle: 'Screen One',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'lightblue' : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'lightblue',
}

export default ScreenOne;
