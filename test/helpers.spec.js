'use strict';

const test = require('ava');
const helpers = require('../src/helpers.js');

test('should return a compound name with plus char', t => {
  t.is(helpers.normalizeName('The Walking Dead'), 'The+Walking+Dead');
});

test('should return a name with accent encoded', t => {
  t.is(helpers.normalizeName('Garoto Cósmico'), 'Garoto+C%C3%B3smico');
});

test('should return a name with one word', t => {
  t.is(helpers.normalizeName('Deadpool'), 'Deadpool');
});

test('should return serialized query params', t => {
  t.is(helpers.buildQuery({a: 'b', c: 'd'}), 'a=b&c=d');
});
