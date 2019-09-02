export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const ADD_SUBMITTED_STRING = 'ADD_SUBMITTED_STRING';
export const DELETE_SUBMITTED_STRING = 'DELETE_SUBMITTED_STRING';

export const increaseCounter = (counter) => {
    return { type: INCREASE_COUNTER, counter: counter}
}

export const decreaseCounter = (counter) => {
    return { type: DECREASE_COUNTER, counter: counter}
}

export const addSubmittedString = (enteredString) => {
    return { type: ADD_SUBMITTED_STRING, enteredString: enteredString}
}

export const deleteSubmittedString = (enteredString) => {
    return { type: DELETE_SUBMITTED_STRING, enteredString: enteredString}
}