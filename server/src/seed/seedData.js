const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Question = require('../models/Question');
const learners = require('./sampleLearners.json');
const questions = require('./sampleQuestions.json');

dotenv.config();

(async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany({});
    await Question.deleteMany({});
    await User.insertMany(learners);
    await Question.insertMany(questions);
    console.log('🌱 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
})();
