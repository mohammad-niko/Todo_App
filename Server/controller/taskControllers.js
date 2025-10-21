import taskModel from "../connectANDmodels/task.model.js";
import userModel from "../connectANDmodels/user.model.js";
export const getAllTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const haveUser = await userModel.findById(userId);

    //validation:
    if (!haveUser)
      return res.status(404).json({ message: "no user with this id" });

    const allTask = await taskModel.find({ user_ID: userId });

    if (!allTask)
      return res.status(404).json({ message: "no task found for this user" });

    res.status(200).json(allTask);
  } catch (error) {
    console.log(`error in getting all task ${error}`);
    res.status(500).json({ message: "error in getting all task" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const { description, isCompleted } = req.body;

    //validation:
    const haveUser = await userModel.findById(userId);
    if (!haveUser)
      return res.status(404).json({ message: "no user with this id" });

    const newTask = await taskModel.create({
      description,
      isCompleted,
      user_ID: userId,
    });
    res
      .status(201)
      .json({ message: "task added succssesfully", task: newTask });
  } catch (error) {
    console.log(`error in creating task ${error}`);
    res.status(500).json({ message: "error in creating task" });
  }
};

export const editTask = async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    const { description, isCompleted } = req.body;
    console.log(isCompleted);
    //validation:
    const haveUser = await userModel.findById(userId);
    if (!haveUser)
      return res.status(404).json({ message: "no user with this id" });

    const upDatedTask = await taskModel.findOneAndUpdate(
      {
        _id: taskId,
        user_ID: userId,
      },
      {
        description: description ?? haveUser.description,
        isCompleted: isCompleted ?? haveUser.isCompleted,
      },
      { new: true }
    );
console.log(upDatedTask);
    res
      .status(200)
      .json({ message: "task updated successfully", task: upDatedTask });
  } catch (error) {
    console.log(`error in editing task ${error}`);
    res.status(500).json({ message: "error in editing task", error: error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    console.log(req.params);
    const { userId, taskId } = req.params;
    //validation:
    const haveUser = await userModel.findById(userId);
    if (!haveUser)
      return res.status(404).json({ message: "no user with this id" });

    const deletedTask = await taskModel.findOneAndDelete({
      _id: taskId,
      user_ID: userId,
    });

    res
      .status(200)
      .json({ message: "task deleted successfully", task: deletedTask });
  } catch (error) {
    console.log(`error in deleting task ${error}`);
    res.status(500).json({ message: "error in deleting task", error: error });
  }
};
