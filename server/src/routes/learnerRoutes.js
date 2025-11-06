const express = require('express');
const router = express.Router();
const { getProgress } = require('../controllers/learnerController');
const { protect } = require('../middleware/roleMiddleware');

router.get('/:userId/progress', protect, getProgress);

module.exports = router;
