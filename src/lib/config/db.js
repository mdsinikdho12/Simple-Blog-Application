import { log } from "console";
import mongoose from "mongoose";
const ConnectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    log("DB already connected");
    return;
  }
  await mongoose.connect(
    "mongodb+srv://mdferdousmahmud86:SINIKDHO13@cluster0.e1djus3.mongodb.net/blog-app"
  );
  console.log("DB connected");
};
export default ConnectDB;
