const Attempt = require('../models/Attempt');
const User = require('../models/User');

exports.getAnalytics = async (req, res) => {
  try {
    const attempts = await Attempt.find();
    const totalUsers = await User.countDocuments();
    res.json({
      totalUsers,
      totalAttempts: attempts.length,
      avgScore: attempts.reduce((a, b) => a + (b.score || 0), 0) / attempts.length || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
