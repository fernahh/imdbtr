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
  const [strMminutes] = string.split(' ');
  const hours = Number(strMminutes) / 60;
  const rhours = Math.round(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.abs(Math.round(minutes));
  return `${rhours}h${rminutes}min`;
};

const helpers = {
  normalizeName,
  buildQuery,
  formatDate
};

module.exports = helpers;
