import moment from 'moment';
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

function toShowtimeMoment(date, time) {
  return moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
}

const getFilmsSelector = state => {
  const now = moment();

  const films = [];

  state.films.collection.forEach(film => {
    let showtimes = [];

    film.showtimes.forEach(showtime => {
      const startsAtMoment = toShowtimeMoment(showtime.startsAtDate, showtime.startsAtTime);
      const endsAtMoment = toShowtimeMoment(showtime.endsAtDate, showtime.endsAtTime);
      if (startsAtMoment.isAfter(now)) {
        showtimes.push({
          ...showtime,
          startsAtMoment,
          endsAtMoment
        });
      }
    });

    if (showtimes.length) {
      film.showtimes = showtimes;
      films.push(film);
    }
  });

  return films;
};

const getFilmsFetchingSelector = state => state.films.isFetching;

export default reducer;

export { actionCreators, getFilmsSelector, getFilmsFetchingSelector };
