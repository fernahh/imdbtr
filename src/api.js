'use strict';

const got = require('got');
const provider = 'http://www.omdbapi.com/?';
const headers = {
  'user-agent': 'https://www.github.com/fernahh/imdbtr'
};

const api = name => {
  if (!name) {
    return false;
  }

  const movie = got(`${provider}t=${name}`, {headers})
    .then(response => {
      const result = JSON.parse(response.body);
      return result.Response === 'False' ? false : result;
    })
    .catch(error => {
      return error.body;
    });

  return movie;
};

module.exports = api;
