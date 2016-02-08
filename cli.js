'use strict';

const minimist = require('minimist');
const imdbtr = require('./src/imdbtr.js');

let run = argv => imdbtr(argv);

exports.run = argv => {
  let movie = minimist(argv);
  run(movie._.pop());
};
