import { deleteTask } from "../../component/Fetch/fetchData";
import { DELETETASKACTIONREQUEST, DELETETASKACTIONSUCCESS } from "../actions/taskActions";

export const deleteTaskThunk = (taskID, userID) => {
  return async (dispatch) => {
    //Dispatch Action Request
    dispatch(DELETETASKACTIONREQUEST());
    try {
      //Dispatch Action Success
      const response = await deleteTask(taskID, userID);
      dispatch(DELETETASKACTIONSUCCESS(taskID));
    } catch (error) {
      //Dispatch Action Failure
      dispatch(DELETETASKACTIONFAILURE(error));
    }
  };
};
