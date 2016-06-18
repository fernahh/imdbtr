'use strict';

const got = require('got');
const helpers = require('./helpers');

const provider = 'http://www.omdbapi.com/?';
const headers = {
  'user-agent': 'https://www.github.com/fernahh/imdbtr'
};

const api = name => {
  if (!name) {
    return false;
  }

  const normalizedName = helpers.normalizeName(name);

  const movie = got(`${provider}t=${normalizedName}`, {headers, json: true})
    .then(response => {
      const result = response.body;
      return result.Response === 'False' ? false : result;
    })
    .catch(err => {
      return err.body;
    });

  return movie;
};

module.exports = api;
