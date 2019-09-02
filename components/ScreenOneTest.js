import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { increaseCounter } from '../store/actions/meals';

const ScreenOneTest = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const counter = useSelector(state => state.meals.counter);

    const dispatch = useDispatch();

    const increaseCounterHandler = useCallback(() => {
        dispatch(increaseCounter(counter));
      }, [dispatch, counter]);

    const nextPage = () => {
        props.navigation.navigate({
            routeName: 'FourthScreen', params: {
                screenId: 'came from screen one',
            }
        })
    }


  return (
   <View>
       <Text>Screen One Test</Text>
        {availableMeals.map((item, index) => {
                        return (
                            <View key={item} index={index}>
                            
                                <Text>
                                    {item}
                                </Text>
                            </View>

                        )
                    })}
                    <Text onPress={increaseCounterHandler}>Counter: {counter}</Text>

                    <Button title='click next' onPress={nextPage} />
   </View>
  );
};



export default ScreenOneTest;
