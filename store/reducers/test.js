
import { INCREASE_COUNTER } from '../actions/test';
import { DECREASE_COUNTER } from '../actions/test';

const initialState = {
  numbers: [1,2,3,4],
  counter: 5,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      let existingCounter = state.counter
    return {...state,counter: existingCounter + 1};
    case DECREASE_COUNTER:
      let currentCounter = state.counter
    return {...state,counter: currentCounter - 1};
    default:
      return state;
  }
  
};

export default testReducer;
