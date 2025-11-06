const { evaluateRule } = require('../services/rulesEngine');
jest.mock('../config/rules.json', () => ({
  masteryRule: { condition: 'score > 70' }
}));

test('evaluates rule correctly', () => {
  expect(evaluateRule('masteryRule', { score: 80 })).toBe(true);
  expect(evaluateRule('masteryRule', { score: 50 })).toBe(false);
});
