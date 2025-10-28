import { postTask } from "../../component/Fetch/fetchData";
import {
  ADDTASKACTIONFAILURE,
  ADDTASKACTIONREQUEST,
  ADDTASKACTIONSUCCESS,
} from "../actions/taskActions";

export const addTaskThunk = (taskData) => {
  return async (dispatch) => {
    // Dispatch request action
    dispatch(ADDTASKACTIONREQUEST());

    try {
      // Post the new task to the server
      const response = await postTask(taskData);

      // Dispatch success action
      dispatch(ADDTASKACTIONSUCCESS(response));
    } catch (error) {
      //Dispatch error action
      dispatch(ADDTASKACTIONFAILURE(error));
    }
  };
};
