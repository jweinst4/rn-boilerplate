import React from 'react';
import { Text, Button, View, FlatList, Platform, TextInput, StyleSheet } from 'react-native';

import Counter from '../components/Counter';

class ScreenOne extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            enteredText: '',
            submittedText: '',
            submittedTextArray: [],
        }
        this.clickedNextOnScreenOne = this.clickedNextOnScreenOne.bind(this)
        this.plusOnScreenOne = this.plusOnScreenOne.bind(this)
        this.minusOnScreenOne = this.minusOnScreenOne.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submitEnteredText = this.submitEnteredText.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
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

    handleInputChange(enteredText) {
        this.setState({ enteredText: enteredText })
        console.log(enteredText);
    }

    submitEnteredText(event) {
        event.preventDefault();
        this.setState({ submittedText: this.state.enteredText });
        this.setState({ enteredText: '' });

        const copyArray = [...this.state.submittedTextArray, { id: Math.random().toString(), value: this.state.enteredText }];
        this.setState({ submittedTextArray: copyArray })
    }

    deleteItem(itemId) {
        console.log(itemId);
        //    https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react
        this.setState({
            submittedTextArray: this.state.submittedTextArray.filter(function (item) {
                return item.id !== itemId.id
            })
        });
    }

    render() {
        console.log(this.state.submittedTextArray)
        return (
            <View style={styles.container}>
                <View style={styles.topThird}>
                    <Text>ScreenOne</Text>
                    <Text onPress={() => {
                        this.plusOnScreenOne(this.state.counter)
                    }}>Plus</Text>
                    <Text onPress={() => {
                        this.minusOnScreenOne()
                    }}>Minus</Text>
                    <Text>{this.state.counter}</Text>
                </View>
                <View style={styles.middleThird}>
                    <Text> Enter String Below:</Text>
                    <TextInput style={styles.inputForm} onChangeText={this.handleInputChange} value={this.state.enteredText} />
                    <Button title='Submit String' onPress={this.submitEnteredText} />
                    <Text>Entered String: {this.state.enteredText}</Text>
                </View>
                <View style={styles.bottomThird}>
                    {this.state.submittedTextArray.map((item, index) => {
                        return (
                            <View key={item.id} index={index} style={styles.submittedStringContainer}>
                                <Text style={styles.submittedStringValue} onPress={() => {
                                    this.deleteItem(item)
                                }}>
                                    {item.value}
                                </Text>
                            </View>

                        )
                    })}
                    <Button title='next' onPress={
                        this.clickedNextOnScreenOne}
                    />
                </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    submittedStringContainer: {
        flexDirection: 'row',
    },
    submittedStringValue: {
        width: '50%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    submittedStringDelete: {
        width: '50%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputForm: {
        borderWidth: 3,
        borderColor: 'red',
        width: 300,
    },
    topThird: {
        height: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleThird: {
        height: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomThird: {
        height: '33%',
    }
});

export default ScreenOne;
