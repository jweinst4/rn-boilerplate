import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayArray = props => {

    return (
        <View style={styles.container}>
            {props.outputArray.map((item, index) => {
                return (
                    <View key={item} index={index} style={styles.displayItem}>
                        <Text style={styles.displayText}>
                            {item}
                        </Text>
                    </View>

                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '10%',
        marginRight: '10%',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
    displayItem: {
        flexWrap: 'wrap',
        width: '30%',
        marginLeft: '10%',
        marginRight: '10%',
        marginVertical: 20,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 3,
    },
    displayText: {
        fontSize: 30,
    }
});

export default DisplayArray;
