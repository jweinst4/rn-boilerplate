import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ScreenTwo = props => {

  const clickedNextOnScreenTwo = () => {
    console.log('clicked next on screen two')
    props.navigation.navigate({ routeName: 'ThirdScreen' })
  }

  return (
    <View>
      <Text style={styles.text}>ScreenTwo</Text>
      <Button title='next' onPress={
        clickedNextOnScreenTwo}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    marginLeft: '40%',
  }
});

export default ScreenTwo;
