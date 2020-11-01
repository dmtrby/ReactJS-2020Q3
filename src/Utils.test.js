import { getRandomString } from './Utils';

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