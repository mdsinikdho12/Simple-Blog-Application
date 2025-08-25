import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);
