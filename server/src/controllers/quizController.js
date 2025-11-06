const Question = require('../models/Question');
const Attempt = require('../models/Attempt');

exports.generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.query;
    const questions = await Question.find({ topic, difficulty }).limit(5);
    res.json({ quiz: questions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    const attempt = new Attempt({ userId, answers, score: 0 });
    await attempt.save();
    res.json({ message: 'Quiz submitted successfully', attempt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
