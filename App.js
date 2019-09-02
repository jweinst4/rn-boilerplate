import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ScreenNavigator from './navigation/NavigatorOne';
import mealsReducer from './store/reducers/meals';

const initialState = {
  count: 10,
  secondTry: 20,
}
function reducer(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ScreenNavigator />
    </Provider>
  );
}
