import axios from './axios';

function getAllFilms() {
  return axios.get().then(res => res.data);
}

export { getAllFilms };
