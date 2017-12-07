import { getAllFilms } from '../data/api';

const types = {
  FETCH_FILMS: '[Films] Fetch'
};

const actionCreators = {
  fetchFilms: () => ({
    type: types.FETCH_FILMS
  })
};

const initialState = {
  collection: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FILMS:
      return {
        ...state,
        collection: getAllFilms()
      };

    default:
      return state;
  }
}

const getFilmsSelector = state => state.films.collection;

export default reducer;

export { actionCreators, getFilmsSelector };
