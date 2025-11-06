const rules = require('../config/rules.json');

exports.getNextDifficulty = (masteryScore) => {
  if (masteryScore >= 80) return 'Hard';
  if (masteryScore >= 50) return 'Medium';
  return 'Easy';
};

exports.evaluateRule = (ruleName, context) => {
  const rule = rules[ruleName];
  if (!rule) return false;
  const { condition } = rule;
  return eval(condition.replace(/\b([a-zA-Z_]\w*)\b/g, (_, v) => context[v] ?? 0));
};
