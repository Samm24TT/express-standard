import mongoose from "mongoose";

const DB_NAME = "codehubmm-express";

export const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGO_URI}\${DB_NAME}`,
    );
    console.log(
      "Database connection is successful.",
      connectionResponse.connection.host,
    );
  } catch (error) {
    console.log("DB Connection error", error);
    process.exit(1);
  }
};
