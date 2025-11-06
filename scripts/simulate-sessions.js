import mongoose from 'mongoose';
import { Learner } from '../server/models/learnerModel.js';

await mongoose.connect('mongodb://localhost:27017/adaptive_learning');
console.log('Simulating learner sessions...');

const learners = await Learner.find();
learners.forEach(async (learner) => {
  learner.progress.push({ topic: 'Math', score: Math.random() * 100 });
  await learner.save();
});

console.log('✅ Simulation complete');
process.exit(0);
