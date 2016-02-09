'use strict';

const api = require('./api.js');
const chalk = require('chalk');
const boxen = require('boxen');

const imdbtr = name => {
  let movie = api(name);

  if (!movie)
    return false;

  return movie.then(result => {
    let movieRes = `
  ${chalk.black.bgYellow.bold(result.Title)} (${result.Year}) on IMDb:

  Director: ... ${result.Director}
  Writer: ..... ${result.Writer}
  Rating: ..... ${result.imdbRating}
  Genre: ...... ${chalk.italic(result.Genre)}
    `;

    console.log(boxen(movieRes, {padding: 1, borderColor: 'yellow'}));
  });
};

module.exports = imdbtr;
