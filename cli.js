'use strict';

const imdbtr = require('./src/imdbtr.js');

const run = argv => imdbtr(argv);

exports.run = argv => {
  const movie = argv._.join(' ');
  run(movie);
};
