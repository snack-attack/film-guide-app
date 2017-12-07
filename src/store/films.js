import { getAllFilms } from '../data/api';

const types = {
  FETCH_FILMS_REQUEST: '[Films] Fetch Request',
  FETCH_FILMS_SUCCESS: '[Films] Fetch Success'
};

const fetchFilmsRequest = () => ({
  type: types.FETCH_FILMS_REQUEST
});
const fetchFilmsSuccess = films => ({
  type: types.FETCH_FILMS_SUCCESS,
  payload: films
});

const actionCreators = {
  fetchFilms: () => dispatch => {
    dispatch(fetchFilmsRequest());

    getAllFilms().then(films => {
      dispatch(fetchFilmsSuccess(films));
    });
  }
};

const initialState = {
  collection: [],
  isFetching: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FILMS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        collection: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
}

const getFilmsSelector = state => state.films.collection;
const getFilmsFetchingSelector = state => state.films.isFetching;

export default reducer;

export { actionCreators, getFilmsSelector, getFilmsFetchingSelector };
