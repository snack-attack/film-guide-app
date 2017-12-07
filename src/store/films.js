import { getAllFilms } from '../data/api';

const types = {
  FETCH_FILMS_SUCCESS: '[Films] Fetch Success'
};

const fetchFilmsSuccess = films => ({
  type: types.FETCH_FILMS_SUCCESS,
  payload: films
});

const actionCreators = {
  fetchFilms: () => dispatch => {
    getAllFilms().then(films => {
      dispatch(fetchFilmsSuccess(films));
    });
  }
};

const initialState = {
  collection: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        collection: action.payload
      };

    default:
      return state;
  }
}

const getFilmsSelector = state => state.films.collection;

export default reducer;

export { actionCreators, getFilmsSelector };
