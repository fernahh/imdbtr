'use strict';

const test = require('ava');
const sinon = require('sinon');
const imdbtr = require('../src/imdbtr');

const sandbox = sinon.sandbox.create({
  useFakeTimers: false,
  useFakeServer: false
});

test.beforeEach(() => {
  sandbox.stub(console, 'log');
});

test.afterEach(() => {
  sandbox.restore();
});

test.serial('should return false for no movie name', async t => {
  t.false(await imdbtr());
  t.false(console.log.called);
});

test.serial('should log an error for not found movies', async t => {
  await imdbtr('thismoviecantbefoundatall');
  const [output] = console.log.firstCall.args;
  t.true(output.includes('Movie not found on IMDB :('));
});

test.serial('should output movie info for found movies', async t => {
  await imdbtr('The Godfather');
  const [output] = console.log.firstCall.args;
  t.true(output.includes('The Godfather'));
  t.true(output.includes('(1972) on IMDb:'));
  t.true(output.includes('Director: ... Francis Ford Coppola'));
});
