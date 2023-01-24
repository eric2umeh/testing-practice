const capitalized = require('./taskFour');
test('Passed capitalized string', () => {
  expect(capitalized('eric')).toEqual('Eric');
});
