'use strict';

const imdbtr = require('./src/imdbtr.js');

const run = (argv1,argv2) => imdbtr(argv1,argv2);

exports.run = argv => {
  const movie = argv._.join(' ');
  const year = argv.y;
  run(movie,year);
};
