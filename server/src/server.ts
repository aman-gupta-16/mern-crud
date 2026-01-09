import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
import User from "./models/user.model";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;



const startServer = async () => {
  try {
    connectDB()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
};

startServer();
