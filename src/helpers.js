'use strict';

const paramNameMap = Object.freeze({
  '_': 'title',
  'y': 'year'
});

const normalizeName = name => {
  const nameList = name.split(' ');

  let normalizedList = nameList.map(currName => {
    return encodeURI(currName);
  });
  normalizedList = normalizedList.join('+');

  return normalizedList.toString();
};

const buildQuery = params => {
  return Object
    .keys(params)
    .map(key => {
      let value = params[key];
      if (key === 'title') {
        value = normalizeName(value.join(' '))
      }
      return `${paramNameMap[key] || key}=${value}`
    })
    .join('&');
}

const helpers = {
  normalizeName,
  buildQuery
};

module.exports = helpers;
