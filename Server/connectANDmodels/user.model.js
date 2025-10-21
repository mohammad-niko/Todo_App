import { mongoose } from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 10 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);
export default userModel;
