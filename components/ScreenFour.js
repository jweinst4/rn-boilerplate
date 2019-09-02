import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { increaseCounter } from '../store/actions/meals';

const ScreenFour = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const counter = useSelector(state => state.meals.counter);
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFavorite = useSelector(state =>
      state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );

    console.log(counter);
    const dispatch = useDispatch();

    const increaseCounterHandler = useCallback(() => {
        dispatch(increaseCounter(counter));
      }, [dispatch, counter]);
  

  return (
   <View>
       <Text>Screen Four</Text>
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
   </View>
  );
};

export default ScreenFour;
