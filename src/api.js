'use strict';

const got = require('got');

const provider = 'http://www.theimdbapi.org/api/find/movie?';
const headers = {
  'user-agent': 'https://www.github.com/fernahh/imdbtr'
};

const api = (query, genre) => {
  if (!query) {
    return false;
  }

  const movie = got(`${provider}${query}`, {headers, json: true})
    .then(response => {
      let result = response.body;

      if (genre) {
        result = result.filter(res => res.genre.map(g => g.toLowerCase()).indexOf(genre) >= 0);
      }

      return result === null ? false : result[0];
    })
    .catch(err => {
      return err.body;
    });

  return movie;
};

module.exports = api;
