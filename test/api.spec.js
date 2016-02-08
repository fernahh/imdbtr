'use strict';

const test = require('ava');
const api = require('../src/api.js');

test('should return the name of movie when it\'s valid title', t => {
  let response = api('The Godfather');

  return response.then(result => {
    t.is(result.Title, 'The Godfather');
    t.is(result.Year, '1972');
  });
});

test('should return error when it\'s a empty string', t => {
  let response = api('');

  return response.then(result => {
    t.is(result.Response, 'False');
  });
});
