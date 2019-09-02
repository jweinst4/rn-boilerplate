import React from 'react';
import { View, Text} from 'react-native';

const DisplayArray = props => {

    return (
        <View>
            <Text>DisplayArray</Text>
            {props.outputArray.map((item, index) => {
                return (
                    <View key={item} index={index}>

                        <Text>
                            {item}
                        </Text>
                    </View>

                )
            })}
        </View>
    );
};

export default DisplayArray;
