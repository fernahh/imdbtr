'use strict';

const chalk = require('chalk');
const figures = require('figures');
const ora = require('ora');
const api = require('./api.js');
const helpers = require('./helpers.js');

const imdbtr = params => {
  if (!params) {
    return false;
  }

  const query = helpers.buildQuery(params);
  const movie = api(query);

  if (!movie) {
    return false;
  }

  const values = Object.values(params).join(', ');
  const spinner = ora(`Searching for ${chalk.yellow(values)}`).start();

  return movie.then(result => {
    spinner.stop();
    if (!result) {
      return console.log(chalk.yellow.bold('Movie not found on IMDB :('));
    }

    const movieRes = `
  ${chalk.black.bgYellow.bold(result.Title)} (${result.Year}) on IMDb:

  ${chalk.yellow(`${figures.star} ${result.imdbRating}`)}

  Duration: .... ${helpers.formatDate(result.Runtime)}
  Director: .... ${result.Director}
  Writer: ...... ${result.Writer}
  Stars: ....... ${result.Actors}
  Genre: ....... ${chalk.italic(result.Genre)}
  Plot: ... ${result.Plot}
    `;

    console.log(movieRes);
  }).catch(error => {
    spinner.stop();
    console.error(chalk.red.bold('Something went wrong :('));
    console.error(error);
  });
};

module.exports = imdbtr;
