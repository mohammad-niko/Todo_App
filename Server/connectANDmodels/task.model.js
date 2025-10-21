import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    description: { type: String, required: true, minLength: 3, maxLength: 30 },
    isCompleted: { type: Boolean, required: true },
    user_ID: {
      type: Schema.Types.ObjectId,
      ref: "user",
      requierd: true,
    },
  },
  { timestamps: true }
);

const taskModel = model("task", taskSchema);
export default taskModel;
