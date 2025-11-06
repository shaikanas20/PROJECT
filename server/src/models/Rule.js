import mongoose from "mongoose";

const ruleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    config: { type: Object, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Rule = mongoose.model("Rule", ruleSchema);
export default Rule;
