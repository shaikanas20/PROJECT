const { getNextDifficulty } = require('../services/rulesEngine');

test('returns correct difficulty', () => {
  expect(getNextDifficulty(85)).toBe('Hard');
  expect(getNextDifficulty(65)).toBe('Medium');
  expect(getNextDifficulty(30)).toBe('Easy');
});
