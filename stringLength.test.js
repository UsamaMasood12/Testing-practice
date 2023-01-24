const stringLength = require('./stringLength');

test('string is good', () => {
  expect(stringLength('hello')).toBe(5);
});

test('string is to long', () => {
  expect(() => stringLength('hello world')).toThrow('String to long.');
});

test('string is short is to short', () => {
  expect(() => stringLength('')).toThrow('String to short.');
});