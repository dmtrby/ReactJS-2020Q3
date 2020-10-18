import queryString from 'query-string';

import { getRandomString, makeUrl } from './Utils';

describe('getRandomString', () => {
  test('it should make string values', () => {
    const value = getRandomString();

    expect(typeof value).toBe('string');
  });

  test('it should make unique values', () => {
    const valuesArray = new Array(100).fill(null).map(() => getRandomString());
    const uniqueArray = [...new Set(valuesArray)]
    expect(uniqueArray.length).toBe(valuesArray.length);
  });
});

describe('makeUrl', () => {
  const queryValues = {
    filter: 'Horror',
    search: 'goal',
    sortBy: 'title',
  }
  
  test('it should change queryValues object by key & value', () => {
    const url = makeUrl(queryValues, 'filter', 'comedy');
    const newQueryValues = queryString.parse(url);

    expect(newQueryValues.filter).toBe('comedy');
  });

  test('it shouldn`t change queryValues another object values except key & value', () => {
    const url = makeUrl(queryValues, 'filter', 'sport');
    const newQueryValues = queryString.parse(url);

    expect(newQueryValues.filter).toMatch('sport');
    expect(newQueryValues.sortBy).toMatch(queryValues.sortBy);
    expect(newQueryValues.search).toMatch(queryValues.search);
  });

  test('url should be string', () => {
    const url = makeUrl(queryValues, 'filter', 'sport');

    expect(typeof url).toBe('string');
  });
})