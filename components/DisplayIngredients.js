import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayIngredients = props => {
    return (
        <View>
            {props.allIngredientsHere.map((item, index) => {
                return (
                    <View key={item.id} index={index} style={styles.displayItemContainer}>
                        <Text>
                            Value: {item.value}
                        </Text>
                    </View>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    displayItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 5,
    },
    displayItem: {
        width: '100%',
    },
    deleteItem: {
        width: '20%',
    }

});

export default DisplayIngredients;