exports.generateFeedback = (question, isCorrect) => {
  if (isCorrect) {
    return {
      message: '✅ Correct! Great job!',
      explanation: question.explanation || 'Keep up the good work!',
    };
  } else {
    return {
      message: '❌ Incorrect. Review the concept.',
      explanation: question.explanation || 'Refer to the topic resources for better understanding.',
    };
  }
};
