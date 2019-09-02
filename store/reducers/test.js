
import { INCREASE_COUNTER } from '../actions/test';
import { DECREASE_COUNTER } from '../actions/test';
import { ADD_SUBMITTED_STRING } from '../actions/test';
import { DELETE_SUBMITTED_STRING } from '../actions/test';

const initialState = {
  numbers: [1, 2, 3, 4],
  counter: 5,
  enteredString: [],
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      let existingCounter = state.counter
      return { ...state, counter: existingCounter + 1 };
    case DECREASE_COUNTER:
      let currentCounter = state.counter
      return { ...state, counter: currentCounter - 1 };
    case ADD_SUBMITTED_STRING:
      let submittedString = { id: Math.random().toString(), value: action.enteredString }
      return { ...state, enteredString: state.enteredString.concat(submittedString) };
    case DELETE_SUBMITTED_STRING:
      let updatedEnteredStrings = [...state.enteredString];
      let existingIndex = state.enteredString.findIndex(
        string => string.id === action.enteredString
      );

      updatedEnteredStrings.splice(existingIndex, 1);
      return { ...state, enteredString: updatedEnteredStrings };
      
    default:
      return state;
  }

};

export default testReducer;
