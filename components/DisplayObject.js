import React from 'react';
import { View, Text} from 'react-native';

const DisplayObject = props => {

    return (
        <View>
            <Text>DisplayArray</Text>
            {props.outputArray.map((item, index) => {
                return (
                    <View key={item.id} index={index}>

                        <Text onPress={() =>
                            props.deletedStringHandler(item.id)}>
                            {item.value}
                        </Text>
                    </View>

                )
            })}
        </View>
    );
};

export default DisplayObject;
