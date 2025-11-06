const masteryService = require('../services/masteryService');
const Mastery = require('../models/Mastery');
const Attempt = require('../models/Attempt');

jest.mock('../models/Mastery');
jest.mock('../models/Attempt');

test('returns default mastery as 0 when not found', async () => {
  Mastery.findOne.mockResolvedValue(null);
  const score = await masteryService.getMastery('user1', 'Math');
  expect(score).toBe(0);
});
