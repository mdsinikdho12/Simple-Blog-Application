import mongoose from "mongoose";

const ConnectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("DB already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB connected");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
  }
};

export default ConnectDB;
