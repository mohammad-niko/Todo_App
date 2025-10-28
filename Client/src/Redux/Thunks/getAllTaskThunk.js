import { getTasks } from "../../component/Fetch/fetchData";
import {
  GETALLActionFailure,
  GETALLActionRequest,
  GETALLActionSuccess,
} from "../actions/taskActions";

export const getAllTaskThunk = () => {
  return async (dispatch) => {
    // Dispatch request action
    dispatch(GETALLActionRequest());
    try {
      // Fetch tasks from the server
      const response = await getTasks("68e66650845538b847e773fe");

      // Dispatch success action with fetched tasks
      dispatch(GETALLActionSuccess(response));
    } catch (error) {
      // Dispatch failure action
      dispatch(GETALLActionFailure(error.message));
    }
  };
};
