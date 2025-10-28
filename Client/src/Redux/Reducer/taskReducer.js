import { produce } from "immer";
import {
  GETALLREQUEST,
  GETALLSUCCESS,
  GETALLFAILURE,
  ADDTASKREQUEST,
  ADDTASKSUCCESS,
  ADDTASKFAILURE,
  DELETETASKREQUEST,
  DELETETASKSUCCESS,
  DELETETASKFAILURE,
  TOGGLETASKREQUEST,
  TOGGLETASKSUCCESS,
  TOGGLETASKFAILURE,
  EDITTASKREQUEST,
  EDITTASKSUCCESS,
  EDITTASKFAILURE,
} from "../actions/taskActions";

const initialState = {
  Task: [],
  Loading: false,
};

export const taskReducer = produce((state, action) => {
  switch (action.type) {
    //GET LOGIC:
    case GETALLREQUEST:
      state.Loading = true;
      break;

    case GETALLSUCCESS:
      state.Loading = false;
      state.Task = action.payload;
      break;

    case GETALLFAILURE:
      state.Loading = false;
      alert(`can't get tasks.  Error: ${action.payload}`);
      break;

    // ADD LOGIC:
    case ADDTASKREQUEST:
      state.Loading = true;
      break;

    case ADDTASKSUCCESS:
      state.Loading = false;
      state.Task.push(action.payload);
      break;

    case ADDTASKFAILURE:
      state.Loading = false;
      alert(`can't add task.  Error: ${action.payload}`);
      break;

    // DELETE LOGIC:
    case DELETETASKREQUEST:
      state.Loading = true;
      break;

    case DELETETASKSUCCESS:
      state.Loading = false;
      state.Task = state.Task.filter((item) => item._id !== action.payload);
      break;

    case DELETETASKFAILURE:
      state.Loading = false;
      alert(`can't delete task.  Error: ${action.payload}`);
      break;

    // TOGGLE LOGIC:
    case TOGGLETASKREQUEST:
      state.Loading = true;
      break;

    case TOGGLETASKSUCCESS:
      state.Loading = false;
      state.Task = state.Task.map((item) =>
        item._id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
      break;

    case TOGGLETASKFAILURE:
      state.Loading = false;
      alert(`can't toggle task.  Error: ${action.payload}`);
      break;

    // EDIT LOGIC:
    case EDITTASKREQUEST:
      state.Loading = true;
      break;

    case EDITTASKSUCCESS:
      state.Loading = false;
      state.Task = state.Task.map((item) =>
        item._id === action.payload._id
          ? {
              ...item,
              description: (item.description = action.payload.description),
            }
          : item
      );
      break;

    case EDITTASKFAILURE:
      state.Loading = false;
      alert(`can't edit task.  Error: ${action.payload}`);
      break;
  }
}, initialState);
