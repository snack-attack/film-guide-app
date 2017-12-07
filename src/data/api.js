import axios from 'axios';

const API_URL = 'https://filmsonfreeview.herokuapp.com/api';

function getAllFilms() {
  return axios.get(`${API_URL}/films`).then(res => res.data);
}

export { getAllFilms };
