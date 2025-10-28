import { useState } from "react";
import { IsEdit, IsNotEdit } from "./handleEditing";

function Task({ taskData }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li className="task-item">
      {taskData && isEditing ? <IsEdit /> : <IsNotEdit data={taskData} />}
    </li>
  );
}

export default Task;
