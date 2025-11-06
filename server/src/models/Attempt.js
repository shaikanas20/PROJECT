import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
    isCorrect: { type: Boolean, required: true },
    timeTaken: { type: Number }, // in seconds
    topic: { type: String },
    attemptDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Attempt = mongoose.model("Attempt", attemptSchema);
export default Attempt;
