const Mastery = require('../models/Mastery');
const Attempt = require('../models/Attempt');

exports.getProgress = async (req, res) => {
  try {
    const userId = req.params.userId;
    const progress = await Mastery.find({ userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
