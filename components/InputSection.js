import React from 'react';
import { Text, Button, View, TextInput, StyleSheet } from 'react-native';

class InputSection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {

        return (
            <View style={styles.middleThird}>
                <Text> Input Section</Text>
                <TextInput style={styles.inputForm} onChangeText={this.props.handleInputChange} value={this.props.enteredText} />
                <Button title='Submit String' onPress={this.props.submitEnteredText} />
                <Text>Entered String: {this.props.enteredText}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    inputForm: {
        borderWidth: 3,
        borderColor: 'red',
        width: 300,
    },
    middleThird: {
        height: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});



export default InputSection;
