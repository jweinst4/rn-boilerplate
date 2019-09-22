import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TextInputForm from '../components/TextInputForm';
import DisplayObject from '../components/DisplayObject';
import DisplayDetails from '../components/DisplayDetails';
import { addSubmittedIngredient, deleteSubmittedIngredient } from '../store/actions/test';

const ScreenOne = props => {

    const [enteredIngredient, setEnteredIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState([]);
    const [currentDetailedIngredient, setCurrentDetailedIngredient] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    const dispatch = useDispatch();
    // console.log(allIngredients)

    const fetchIngredientFromApi = () => {

        let apiKey = "ahWpB1wbRNPhAI61Q57ggIbw4sRKT7Gu8PlQAsnB";
        let url = "http://api.nal.usda.gov/ndb/search/?format=json&q=" + enteredIngredient + "&sort=n&max=25&offset=0&api_key=" + apiKey;

        // http://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=ahWpB1wbRNPhAI61Q57ggIbw4sRKT7Gu8PlQAsnB

        fetch(url)
            // .then(res => res.json()) // comment this out for now
            .then(res => res.json())          // convert to plain text
            .then(text => parseFetchedIngredient(text))  // then log it out
    }

    const parseFetchedIngredient = (text) => {
        // console.log("q:" + text.list.q)
        // console.log("sr:" + text.list.sr)
        // console.log("ds:" + text.list.ds)
        // console.log("start:" + text.list.start)
        // console.log("end:" + text.list.end)
        // console.log("total:" + text.list.total)
        // console.log("group:" + text.list.group)
        // console.log("sort:" + text.list.sort)

        let fetchedIngredientList = text.list.item
        // console.log(fetchedIngredientList)

        for (var prop in fetchedIngredientList) {
            setAllIngredients(oldArray => [...oldArray, { id: Math.random().toString(), offset: fetchedIngredientList[prop].offset, group: fetchedIngredientList[prop].group, name: fetchedIngredientList[prop].name, ndbno: fetchedIngredientList[prop].ndbno, ds: fetchedIngredientList[prop].ds, manu: fetchedIngredientList[prop].manu }])
        }

    }

    const addSubmittedIngredientHandler = useCallback(() => {
        setEnteredIngredient('');
        fetchIngredientFromApi();
        dispatch(addSubmittedIngredient(enteredIngredient));
    }, [dispatch, enteredIngredient])
        ;

    const fetchDetailedIngredientFromApi = (id) => {
        // console.log('fetching from onpress event')
        // console.log(id)

        let apiKey = "ahWpB1wbRNPhAI61Q57ggIbw4sRKT7Gu8PlQAsnB";
        let url = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=" + apiKey + "&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=" + id;

        // https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=ahWpB1wbRNPhAI61Q57ggIbw4sRKT7Gu8PlQAsnB&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009

        fetch(url)
            // .then(res => res.json()) // comment this out for now
            .then(res => res.json())          // convert to plain text
            .then(text => parseFetchedDetailedIngredient(text))  // then log it out
    }

    const parseFetchedDetailedIngredient = (text) => {
        setCurrentDetailedIngredient(oldArray => [...oldArray, { id: Math.random().toString(), name: text.report.foods[0].name, ndbno: text.report.foods[0].ndbno, weight: text.report.foods[0].weight, measure: text.report.foods[0].measure, nutrients: text.report.foods[0].nutrients }])

        setShowDetails(true)
    }


    const deletedIngredientHandler = useCallback((item) => {
        dispatch(deleteSubmittedIngredient(item));
    }, [dispatch, enteredIngredient]);

    const ingredientInputHandler = enteredText => {
        setEnteredIngredient(enteredText);
    };

    return (

        <ScrollView>
            <View style={styles.container}>
                {showDetails ?
                    <DisplayDetails currentDetailedIngredient={currentDetailedIngredient} />
                    :
                    <View>
                        <TextInputForm ingredientInputHandler={ingredientInputHandler} enteredIngredient={enteredIngredient} addSubmittedIngredientHandler={addSubmittedIngredientHandler} />
                        <DisplayObject allIngredients={allIngredients} fetchDetailedIngredientFromApi={fetchDetailedIngredientFromApi} />
                    </View>
                }
            </View>
            <Text>

            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 24,
    },
    counterAndInputContainer: {
        flex: 1,
    },
    counterContainer: {
        height: '30%',
        borderWidth: 3,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'lightblue',
        marginVertical: 60,
    },
    inputFormAndDisplayContainer: {
        height: '30%',
        borderWidth: 3,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: 'lightblue',
    },
    nextPage: {
        position: 'absolute',
        bottom: 120,
        right: 0,
        color: 'black',
        fontSize: 18,
    }
});

ScreenOne.navigationOptions = navData => {
    return {
        headerTitle: 'Screen One',
    };
};


export default ScreenOne;
