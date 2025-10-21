import mongoose from "mongoose";
const { connect } = mongoose;

export const connectDB = async (MONGODBURI) => {
  try {
    await connect(MONGODBURI);
    console.log("MongoDB connected...✅");
  } catch (error) {
    console.log(`Mongodb connection error ${error}`);
  }
};
