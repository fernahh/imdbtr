'use strict';

const got = require('got');
const provider = 'http://www.omdbapi.com/?';
const headers = {
  'user-agent': 'https://www.github.com/fernahh/imdbtr'
};

const api = name => {
  let movie = got(`${provider}t=${name}`, {headers})
    .then(response => {
      return JSON.parse(response.body);
    })
    .catch(error => {
      return JSON.parse(error.body);
    });

  return movie;
}

module.exports = api;
