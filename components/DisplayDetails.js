import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayDetails = props => {
    // console.log(props.currentDetailedIngredient[0].nutrients)

    return (
        <View>
            <Text>Name:{props.currentDetailedIngredient[0].name}</Text>
            <Text>Measure: {props.currentDetailedIngredient[0].measure}</Text>
            {props.currentDetailedIngredient[0].nutrients.map((item, index) => {
                return (
                    <View key={item.nutrient_id} index={index} style={styles.detailedBoxBorder}>
                        <Text>Nutrient: {item.nutrient}</Text>
                        <Text>gm: {item.gm}</Text>
                        <Text>unit: {item.unit}</Text>
                        <Text>value: {item.value}</Text>
                    </View>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    detailedBoxBorder: {
        borderWidth: 3,
    }
});

export default DisplayDetails;