import React from 'react';
import { Text, Button, View, FlatList, Platform, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {

    return (

      <View style={styles.topThird}>
        <Text onPress={() => {
          this.props.plusOnScreenOne()
        }}>Plus</Text>
        <Text onPress={() => {
          this.props.minusOnScreenOne()
        }}>Minus</Text>
        <Text>{this.props.counter}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topThird: {
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter);
