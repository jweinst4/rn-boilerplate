import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ScreenThree = props => {
  const clickedNextOnScreenThree = () => {
    console.log('clicked next on screen three')
  }
  return (
    <View>
      <Text style={styles.text}>ScreenThree</Text>
      <Button title='next' onPress={
        clickedNextOnScreenThree}
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

export default ScreenThree;
