import { Router } from "express";
import { addUser, editUser, getUser } from "../controller/userControllers.js";
import {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
} from "../controller/taskControllers.js";

const userRoute = Router();

//users:
userRoute.get("/:userId", getUser);
userRoute.post("/", addUser);
userRoute.put("/:id", editUser);

//userTask:
userRoute.get("/:userId/task", getAllTask);
userRoute.post("/:userId/task", createTask);
userRoute.put("/:userId/task/:taskId", editTask);
userRoute.delete("/:userId/task/:taskId", deleteTask);

export default userRoute;
