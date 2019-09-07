import React from 'react';
import { View, Text} from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';


const HeaderButton = props => {

    return (
        <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
    );
};

export default HeaderButton;
