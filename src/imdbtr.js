'use strict';

const api = require('./api.js');
const chalk = require('chalk');
const figures = require('figures');

const imdbtr = name => {
  const movie = api(name);

  if (!movie) {
    return false;
  }

  return movie.then(result => {
    if (!result) {
      return console.log(chalk.yellow.bold('Movie not found on IMDB :('));
    }

    const movieRes = `
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
