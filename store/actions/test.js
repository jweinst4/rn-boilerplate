export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const increaseCounter = (counter) => {
    return { type: INCREASE_COUNTER, counter: counter}
}

export const decreaseCounter = (counter) => {
    return { type: DECREASE_COUNTER, counter: counter}
}