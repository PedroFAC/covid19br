import { arrayGenerator } from '../functions/arrayGenerator';

describe('Testing arrayGenerator util', () => {
  it('Should return an array of 10 units', () => {
    const array = arrayGenerator(10);
    expect(array.length).toBe(10);
  });
  it('Should return an array of 100 units', () => {
    const array = arrayGenerator(100);
    expect(array.length).toBe(100);
  });
  it('Should return an array of 10 units and each of them should be equal to a value parameter ', () => {
    const value = 10;
    const array = arrayGenerator(10, value);
    array.forEach((item) => expect(item).toBe(value));
  });
  it('Should return an array of 10 units and each of them should have a default value', () => {
    const array = arrayGenerator(10);
    array.forEach((item) => expect(typeof item).not.toBe('undefined'));
  });
});
