import userModel from "../connectANDmodels/user.model.js";




export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const haveUser = await userModel.findById(userId);
    if (!haveUser)
      return res.status(404).json({ message: "no user with this id" });

    res.status(200).json(haveUser);
  } catch (error) {
    console.log(`error in getUser controller ${error}`);
    res
      .status(500)
      .json({ message: "error in get user", error: error.message });
    console.log(errorm.message);
  }
};

export const addUser = async (req, res) => {
  try {
    const userData = req.body;
    await userModel.create(userData);
    res.status(201).json({ message: "user added successfully ✅" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in add user", error: error.message });
    console.log(`error in addUser controller ${error}`);
  }
};

export const editUser = async (req, res) => {
  try {
    const userId = req.pramse;
    const haneUser = await userModel.findById(userId);
    if (!haneUser)
      return res.status(404).json({ message: "no user with this id" });

    const userData = req.body;

    await userModel.findByIdAndUpdate(userId, userData);
    res.status(200).json({ message: "user updated successfully ✅" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in update user", error: error.message });
    console.log(`error in editUser controller ${error}`);
  }
};
