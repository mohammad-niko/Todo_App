import { TaskComplet } from "../../component/Fetch/fetchData";
import {
  TOGGLETASKACTIONFAILURE,
  TOGGLETASKACTIONREQUEST,
  TOGGLETASKACTIONSUCCESS,
} from "../actions/taskActions";

export function toggleTaskThunk(_id, isCompleted, user_ID) {
  return async (dispatch) => {
    // Dispatch request action
    dispatch(TOGGLETASKACTIONREQUEST());
    try {
      // Post the toggle task to the server
      const data = { _id, isCompleted: !isCompleted, user_ID };
      const response = await TaskComplet(data);
      // Dispatch success action
      dispatch(TOGGLETASKACTIONSUCCESS(_id));
    } catch (error) {
      //Dispatch error action
      dispatch(TOGGLETASKACTIONFAILURE(error));
    }
  };
}
