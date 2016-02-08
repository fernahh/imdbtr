'use strict';

const imdbtr = require('./src/imdbtr.js');

let run = argv => imdbtr(argv);

exports.run = argv => {
  let movie = argv._.join(" ");
  run(movie);
};
