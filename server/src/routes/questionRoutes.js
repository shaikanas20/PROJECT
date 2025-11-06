const express = require('express');
const router = express.Router();
const { getQuestions, addQuestion } = require('../controllers/questionController');
const { protect, instructorOnly } = require('../middleware/roleMiddleware');

router.get('/', protect, getQuestions);
router.post('/', protect, instructorOnly, addQuestion);

module.exports = router;
