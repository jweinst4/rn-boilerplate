import React from 'react';
import { Button, View, Platform, StyleSheet } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';


import Counter from '../components/Counter';
import InputSection from '../components/InputSection';
import DisplaySection from '../components/DisplaySection';


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
        console.log(this.props.navigation)
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
        return (
            <View style={styles.container}>
                <Counter counter={this.state.counter} plusOnScreenOne={this.plusOnScreenOne} minusOnScreenOne={this.minusOnScreenOne} />

                <View style={styles.middleThird}>
                    <InputSection handleInputChange={this.handleInputChange} enteredText={this.state.enteredText} submitEnteredText={this.submitEnteredText} />

                    <DisplaySection submittedTextArray={this.state.submittedTextArray} deleteItem={this.deleteItem} />
                </View>

                <View style={styles.bottomThird}>
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
    bottomThird: {
        height: '33%',
    }
});

export default ScreenOne;
