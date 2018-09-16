'use strict';

const test = require('ava');
const api = require('../src/api.js');
const helpers = require('../src/helpers.js');

test('should return the name of movie when it\'s valid title', async t => {
  const result = await api(helpers.buildQuery({title: ['The Godfather']}));

  t.is(result.Title, 'The Godfather');
  t.is(result.Year, '1972');
});

test('should return correct year for the movie', async t => {
  const result = await api(helpers.buildQuery({title: ['The Godfather'], year: '1990'}));

  t.is(result.Year, '1990');
});

test('should return the name of movie when it\'s valid title with accented', async t => {
  const result = await api(helpers.buildQuery({title: ['Garoto Cósmico']}));

  t.is(result.Title, 'Garoto Cósmico');
  t.is(result.Year, '2007');
});

test('should return error when it\'s a empty string', t => {
  const response = api('');

  t.is(response, false);
});

test('should return error when it\'s a invalid entry', t => {
  const response = api();

  t.is(response, false);
});
