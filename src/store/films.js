import films from '../data/films.json';

const initialState = {
  collection: films
};

function reducer(state = initialState) {
  return state;
}

const getFilmsSelector = state => state.films.collection;

export default reducer;

export { getFilmsSelector };
