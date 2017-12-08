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

const getFilmsSelector = state => {
  const now = moment();
  const films = state.films.collection;
  return filterFilmsAfter(now, films);
};

const getFilmsFetchingSelector = state => state.films.isFetching;

export default reducer;

export { actionCreators, getFilmsSelector, getFilmsFetchingSelector };

function toShowtimeMoment(date, time) {
  return moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
}

function filterFilmsAfter(date, films) {
  return films.reduce(filmReducer, []).sort(filmSorter);

  function filmReducer(films, film) {
    const showtimes = film.showtimes.reduce(showtimeReducer, []);
    if (showtimes.length) {
      films.push({
        ...film,
        showtimes,
        nextShowtime: showtimes[0]
      });
    }
    return films;
  }

  function showtimeReducer(showtimes, showtime) {
    // Only show films which are starting in the future.
    const startsAtMoment = toShowtimeMoment(showtime.startsAtDate, showtime.startsAtTime);
    const endsAtMoment = toShowtimeMoment(showtime.endsAtDate, showtime.endsAtTime);
    if (startsAtMoment.isAfter(date)) {
      showtimes.push({
        ...showtime,
        startsAtMoment,
        endsAtMoment
      });
    }
    return showtimes;
  }

  function filmSorter(first, second) {
    const firstStartsAtMoment = first.nextShowtime.startsAtMoment;
    const secondStartsAtMoment = second.nextShowtime.startsAtMoment;

    if (firstStartsAtMoment.isBefore(secondStartsAtMoment)) {
      return -1;
    }

    if (firstStartsAtMoment.isAfter(secondStartsAtMoment)) {
      return 1;
    }

    return 0;
  }
}
