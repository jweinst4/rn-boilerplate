import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayObject = props => {
    return (
        <View>
            {props.allIngredients.map((item, index) => {
                return (
                    <View key={item.id} index={index} style={styles.displayItemContainer}>
                        <Text onPress={() => {props.fetchDetailedIngredientFromApi(item.ndbno)}} style={styles.displayItem}>
                            Name: {item.name}
                            ndbno: {item.ndbno}
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

export default DisplayObject;