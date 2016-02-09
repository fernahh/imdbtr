'use strict';

const api = require('./api.js');
const chalk = require('chalk');
const figures = require('figures');

const imdbtr = name => {
  let movie = api(name);

  if (!movie)
    return false;

  return movie.then(result => {
    let movieRes = `
  ${chalk.black.bgYellow.bold(result.Title)} (${result.Year}) on IMDb:

  ${chalk.yellow(`${figures.star} ${result.imdbRating}`)}

  Director: ... ${result.Director}
  Writer: ..... ${result.Writer}
  Genre: ...... ${chalk.italic(result.Genre)}
    `;

    console.log(movieRes);
  });
};

module.exports = imdbtr;
