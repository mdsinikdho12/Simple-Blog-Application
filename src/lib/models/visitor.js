// lib/models/visitor.js
import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", VisitorSchema);
