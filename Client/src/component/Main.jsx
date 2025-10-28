import { useCallback, useEffect, useRef, useState } from "react";
import Task from "./Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { getAllTaskThunk } from "../Redux/Thunks/getAllTaskThunk";
import { addTaskThunk } from "../Redux/Thunks/addTaskThunk";

function Main() {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const tasksFromStore = useSelector((store) => store.Task);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const taskDescription = newTask.trim();
      if (taskDescription === "") return;

      const data = {
        description: taskDescription,
        isCompleted: false,
        user_ID: "68e66650845538b847e773fe",
      };

      dispatch(addTaskThunk(data));

      setNewTask("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [newTask]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    dispatch(getAllTaskThunk());
  }, []);

  return (
    <main className="main">
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={newTask}
            ref={inputRef}
            onChange={(e) =>setNewTask(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <ul className="task-container">
          {tasksFromStore &&
            tasksFromStore.map((item) => {
              return <Task key={item._id} taskData={item} />;
            })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
