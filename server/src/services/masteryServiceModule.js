const Mastery = require('../models/Mastery');
const Attempt = require('../models/Attempt');

exports.updateMastery = async (userId, topic, score) => {
  const mastery = await Mastery.findOneAndUpdate(
    { userId, topic },
    { $inc: { totalAttempts: 1, totalScore: score }, $set: { lastAttempt: new Date() } },
    { upsert: true, new: true }
  );

  mastery.masteryScore = (mastery.totalScore / (mastery.totalAttempts * 100)) * 100;
  await mastery.save();
  return mastery;
};

exports.getMastery = async (userId, topic) => {
  const mastery = await Mastery.findOne({ userId, topic });
  return mastery ? mastery.masteryScore : 0;
};
