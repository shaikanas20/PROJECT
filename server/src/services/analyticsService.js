const Mastery = require('../models/Mastery');
const Attempt = require('../models/Attempt');

exports.getMasteryTrajectory = async (userId) => {
  const attempts = await Attempt.find({ userId }).sort({ createdAt: 1 });
  const data = attempts.map(a => ({
    date: a.createdAt,
    score: a.score
  }));
  return data;
};

exports.getOverallStats = async () => {
  const totalAttempts = await Attempt.countDocuments();
  const avgScore = (await Attempt.aggregate([
    { $group: { _id: null, avg: { $avg: "$score" } } }
  ]))[0]?.avg || 0;

  return { totalAttempts, avgScore };
};
