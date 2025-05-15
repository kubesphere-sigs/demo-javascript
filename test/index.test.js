const { add } = require('../src/index');

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
