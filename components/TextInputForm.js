import React from 'react';
import { View, TextInput, Button } from 'react-native';


const TextInputForm = props => {

    return (
        <View>
            <TextInput
                placeholder="Enter String"
                onChangeText={props.stringInputHandler}
                value={props.enteredString}
            />
            <Button title="Add String" onPress={props.addSubmittedStringHandler} />
        </View>
    );
};

export default TextInputForm;
