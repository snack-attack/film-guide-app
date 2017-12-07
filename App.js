import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navigator from './src/navigator';
import filmsReducer from './src/store/films';

const store = createStore(filmsReducer);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
