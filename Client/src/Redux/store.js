import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { taskReducer } from "./Reducer/taskReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const middleware = thunk;

export const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(middleware))
);
