const capitalize = require('./capitalize');

test('"hello" expected to be "Hello"', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Please enter a string', () => {
    expect(() => capitalize('111')).toThrow('Must be a string');
  });