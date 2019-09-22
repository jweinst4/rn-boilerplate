
export const ADD_SUBMITTED_INGREDIENT = 'ADD_SUBMITTED_INGREDIENT';
export const DELETE_SUBMITTED_INGREDIENT = 'DELETE_SUBMITTED_INGREDIENT';

export const addSubmittedIngredient = (enteredIngredient) => {
    return { type: ADD_SUBMITTED_INGREDIENT, enteredIngredient: enteredIngredient}
}

export const deleteSubmittedIngredient = (enteredIngredient) => {
    return { type: DELETE_SUBMITTED_INGREDIENT, enteredIngredient: enteredIngredient}
}