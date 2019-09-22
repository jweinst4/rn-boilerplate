import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { AuthSession } from 'expo';


const TextInputForm = props => {

    return (
        <View>
            <TextInput
                placeholder="Search for Ingredient"
                onChangeText={props.ingredientInputHandler}
                value={props.enteredIngredient}
                style={styles.textInput}
            />
            <Text style={styles.addStringText} onPress={props.addSubmittedIngredientHandler}>
                Add Ingredient
            </Text>
        </View >
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 14,
        borderWidth: 3,
        marginTop: 20,
        width: '70%',
        marginLeft: '15%',
        height: 30,
        borderRadius: 5,
    },
    addStringText: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
    }
});

export default TextInputForm;
