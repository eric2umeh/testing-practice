const strLength = require('./taskOne');

test('if str.length = empty or if str > 10 characters, throw error', () => {
  expect(strLength(' ')).toEqual(
    'Check if the string is at least 1 character long and not longer than 10 characters'
  );
});
test('the tests.length = 5 passed', () => {
  expect(strLength('tests')).toBe(5);
});
