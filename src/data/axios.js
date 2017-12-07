import films from '../data/films.json';

const axios = {
  get: () =>
    new Promise(resolve => {
      setTimeout(() => resolve({ data: films }), 5000);
    })
};

export default axios;
