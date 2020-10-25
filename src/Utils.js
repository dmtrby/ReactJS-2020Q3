import queryString from 'query-string';

const getRandomString = () => Math.random().toString(32).slice(2, 12);

const makeUrl = (queryValues, key, value) => {
  queryValues[key] = value;
  const url = queryString.stringify(queryValues, {
    skipEmptyString: true,
  });
  return `?${url}`;
};

export { getRandomString, makeUrl };
