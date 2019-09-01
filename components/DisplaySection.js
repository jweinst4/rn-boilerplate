import React from 'react';
import { Text, Button, View, FlatList, Platform, TextInput, StyleSheet } from 'react-native';

import Counter from '../components/Counter';

class DisplaySection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {

        return (
            <View>
                {this.props.submittedTextArray.map((item, index) => {
                        return (
                            <View key={item.id} index={index} style={styles.submittedStringContainer}>
                                <Text style={styles.submittedStringValue} onPress={() => {
                                    this.props.deleteItem(item)
                                }}>
                                    {item.value}
                                </Text>
                            </View>

                        )
                    })}
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
});



export default DisplaySection;
