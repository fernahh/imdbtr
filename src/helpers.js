'use strict';

const normalizeName = name => {
  const nameList = name.split(' ', 2);
  let normalizedList = [];

  if (nameList.length > 1) {
    normalizedList = nameList.map(currName => {
      return encodeURI(currName);
    });

    normalizedList = normalizedList.join('+');
  }

  return normalizedList.toString();
};

const helpers = {
  normalizeName: normalizeName
}

module.exports = helpers;
