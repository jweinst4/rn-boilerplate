import { ADD_SUBMITTED_INGREDIENT } from '../actions/test';
import { DELETE_SUBMITTED_INGREDIENT } from '../actions/test';
import { ADD_ALL_INGREDIENTS } from '../actions/test';


const initialState = {
  enteredIngredient: [],
  allIngredients: [],
};


const testReducer = (state = initialState, action) => {
  switch (action.type) {
    
    
    case ADD_SUBMITTED_INGREDIENT:
      let submittedIngredient = { id: Math.random().toString(), value: action.enteredIngredient }
      // console.log(state)
      console.log('add submitted ingredient')
      return { ...state, enteredIngredient: state.enteredIngredient.concat(submittedIngredient) };
      

    case DELETE_SUBMITTED_INGREDIENT:
      let updatedEnteredIngredients = [...state.enteredIngredient];
      let existingIndex = state.enteredIngredient.findIndex(
        string => string.id === action.enteredIngredient
      );
      updatedEnteredIngredients.splice(existingIndex, 1);
      // console.log(state)
      console.log('delete submitted ingredient')
      return { ...state, enteredIngredient: updatedEnteredIngredients };
      

      case ADD_ALL_INGREDIENTS:
      let submittedAllIngredient = action.allIngredients
      // console.log(state)
      return { ...state, allIngredients: state.allIngredients.concat(submittedAllIngredient) };
    default:
      return state;

  }

};

export default testReducer;
