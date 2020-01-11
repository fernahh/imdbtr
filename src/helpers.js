'use strict';

const paramNameMap = Object.freeze({
  _: 'title',
  y: 'year'
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
        value = normalizeName(value.join(' '));
      }
      const param = paramNameMap[key] || key;
      return `${param.charAt(0)}=${value}`;
    })
    .join('&');
};

const formatDate = string => {
  let [ strMminutes ] = string.split(" ");
  let hours = Number(strMminutes) / 60;
  let rhours = Math.round(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.abs(Math.round(minutes));
  return `${rhours} h ${rminutes} min`;
}

const helpers = {
  normalizeName,
  buildQuery,
  formatDate
};

module.exports = helpers;
