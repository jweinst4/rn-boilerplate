import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DisplayObject = props => {

    return (
        <View>
            {props.outputArray.map((item, index) => {
                return (
                    <View key={item.id} index={index} style={styles.displayItemContainer}>
                        <Text style={styles.displayItem}>
                            {item.value}
                        </Text>
                        <Icon style={styles.deleteItem} onPress={() =>
                            props.deletedStringHandler(item.id)} name="minus" style={styles.displayOperator} size={30} color='black' />
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
    },
    displayItem: {
        width: '50%',
    },
    deleteItem: {
        width: '20%',
    }

});

export default DisplayObject;
