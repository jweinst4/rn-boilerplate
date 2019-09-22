import { ADD_SUBMITTED_INGREDIENT } from '../actions/test';
import { DELETE_SUBMITTED_INGREDIENT } from '../actions/test';

const initialState = {
  numbers: [1, 2, 3, 4],
  counter: 0,
  enteredString: [],
  enteredIngredient: [],
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_SUBMITTED_INGREDIENT:
      let submittedIngredient = { id: Math.random().toString(), value: action.enteredIngredient }
      return { ...state, enteredIngredient: state.enteredIngredient.concat(submittedIngredient) };

    case DELETE_SUBMITTED_INGREDIENT:
      let updatedEnteredIngredients = [...state.enteredIngredient];
      let existingIndex = state.enteredIngredient.findIndex(
        string => string.id === action.enteredIngredient
      );
      updatedEnteredIngredients.splice(existingIndex, 1);
      return { ...state, enteredIngredient: updatedEnteredIngredients };

    default:
      return state;
  }

};

export default testReducer;
