'use strict';

const got = require('got');

const provider = 'http://www.omdbapi.com/?apikey=315796c1&';
const headers = {
  'user-agent': 'https://www.github.com/fernahh/imdbtr'
};

const api = query => {
  if (!query) {
    return false;
  }
  const movie = got(`${provider}${query}`, {headers, json: true})
    .then(response => {
      const result = response.body;
      return result.Response === 'False' ? false : result;
    })
    .catch(error => {
      return error.body;
    });

  return movie;
};

module.exports = api;
