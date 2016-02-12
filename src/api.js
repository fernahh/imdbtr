'use strict';

const got = require('got');
const provider = 'http://www.omdbapi.com/?';
const headers = {
  'user-agent': 'https://www.github.com/fernahh/imdbtr'
};

const normalizeName = name => {
  const nameList = name.split(' ', 2);
  let normalizedList = [];

  if (nameList.length > 1) {
    normalizedList = nameList.map(currName => {
      return encodeURI(currName);
    });

    normalizedList = normalizedList.join('+');
  }

  return normalizedList.toString();
};

const api = name => {
  if (!name) {
    return false;
  }

  const normalizedName = normalizeName(name);

  const movie = got(`${provider}t=${normalizedName}`, {headers, json: true})
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
