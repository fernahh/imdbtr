'use strict';

const chalk = require('chalk');
const figures = require('figures');
const ora = require('ora');
const api = require('./api.js');

const imdbtr = name => {
  const movie = api(name);

  if (!movie) {
    return false;
  }

  const spinner = ora(`Searching for ${chalk.yellow(name)}`).start();
  return movie.then(result => {
    spinner.stop();
    if (!result) {
      return console.log(chalk.yellow.bold('Movie not found on IMDB :('));
    }

    const movieRes = `
  ${chalk.black.bgYellow.bold(result.title)} (${result.year}) on IMDb:

  ${chalk.yellow(`${figures.star} ${result.rating}`)}

  Duration: .... ${result.length} min
  Director: .... ${result.director}
  Writer: ...... ${result.writers.join(', ')}
  Stars: ....... ${result.stars.join(', ')}
  Genre: ....... ${chalk.italic(result.genre.join(', '))}
  Storyline: ... ${result.storyline}
    `;

    console.log(movieRes);
  }).catch(err => {
    spinner.stop();
    console.error(chalk.red.bold('Something went wrong :('));
    console.error(err);
  });
};

module.exports = imdbtr;
