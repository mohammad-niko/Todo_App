import { useContext } from "react";

import { deleteTask, } from "../Fetch/fetchData";
import { useDispatch } from "react-redux";
import { toggleTaskThunk } from "../../Redux/Thunks/toggleTaskThunk";
import { deleteTaskThunk } from "../../Redux/Thunks/deleteTaskThunk";

export function IsEdit() {
  return (
    <>
      {/* onBlur */}
      <input type="text" className="form-control edit-input" />

      <button className="btn btn-info">cansel</button>
    </>
  );
}

export function IsNotEdit({ data }) {
  const dispatch = useDispatch();
  const { description, isCompleted, _id, user_ID } = data;

  function hendleComplet() {
    dispatch(toggleTaskThunk(_id, isCompleted, user_ID));
  }

   function handleRemoveTask() {
    dispatch(deleteTaskThunk(_id, user_ID));
  }
  return (
    <>
      <input
        type="checkbox"
        onChange={hendleComplet}
        className="form-check-input"
        aria-label="..."
        checked={isCompleted}
      />
      <p
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        className="task-title"
      >
        {description}
      </p>

      <button className="btn btn-danger" onClick={handleRemoveTask}>
        <i className="bi bi-trash3"></i>
      </button>
    </>
  );
}
