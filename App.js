import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Navigator from './src/navigator';
import filmsReducer, { actionCreators as filmsActionCreators } from './src/store/films';

const reducers = combineReducers({
  films: filmsReducer
});

const store = createStore(reducers);

store.dispatch(filmsActionCreators.fetchFilms());

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
