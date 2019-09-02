import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ScreenNavigator from './navigation/ScreenNavigator';
import testReducer from './store/reducers/test';

const rootReducer = combineReducers({
  test: testReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ScreenNavigator />
    </Provider>
  );
}
