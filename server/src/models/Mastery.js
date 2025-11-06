import mongoose from "mongoose";

const masterySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    topic: { type: String, required: true },
    score: { type: Number, default: 0 }, // mastery %
    streak: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Mastery = mongoose.model("Mastery", masterySchema);
export default Mastery;
