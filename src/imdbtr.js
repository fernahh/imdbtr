'use strict';

const api = require('./api.js');
const chalk = require('chalk');

const imdbtr = name => {
  let movie = api(name);

  return movie.then(result => {
    console.log(chalk.blue(result.Title));
    console.log(chalk.blue(result.Year));
  });
};

module.exports = imdbtr;
