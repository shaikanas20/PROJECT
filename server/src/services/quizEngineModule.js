const Question = require('../models/Question');
const rulesEngine = require('./rulesEngine');
const masteryService = require('./masteryService');

exports.generateAdaptiveQuiz = async (user, topic) => {
  const mastery = await masteryService.getMastery(user._id, topic);
  const difficulty = rulesEngine.getNextDifficulty(mastery);

  const questions = await Question.aggregate([
    { $match: { topic, difficulty } },
    { $sample: { size: 5 } }
  ]);

  return {
    topic,
    difficulty,
    questions,
  };
};
