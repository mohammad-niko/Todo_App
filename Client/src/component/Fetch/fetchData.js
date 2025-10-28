import { useDispatch } from "react-redux";

export const getTasks = async (user_ID) => {
  const URL = `http://localhost:5000/api/user/${user_ID}/task`;
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 404) throw new Error("not found");
    if (res.status === 500) throw new Error("server error");
    if (!res.ok) throw new Error("can't get user tasks");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(`can't get user tasks error: ${error}`);
  }
};

export const postTask = async ({ description, isCompleted, user_ID }) => {
  const URL = `http://localhost:5000/api/user/${user_ID}/task`;

  try {
    const post = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description, isCompleted, user_ID }),
    });
    if (post.status === 404) throw new Error("not found");
    if (post.status === 500) throw new Error("server error");
    if (!post.ok) throw new Error("can't post task");

    const res = await post.json();

    alert("task added successfully✅");
    return res.task;
  } catch (error) {
    console.log(`can't post task error: ${error}`);
  }
};

export const TaskComplet = async ({ _id, isCompleted, user_ID} ) => {

  const URL = `http://localhost:5000/api/user/${user_ID}/task/${_id}`;
  try {
    const Put = await fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted }),
    });

    if (Put.status === 404) throw new Error("not found");
    if (Put.status === 500) throw new Error("server error");
    if (!Put.ok) throw new Error("can't edit the task");
  } catch (error) {
    console.log(`can't Put the task error: ${error}`);
  }
};

export const deleteTask = async (_id, user_ID) => {
  const URL = `http://localhost:5000/api/user/${user_ID}/task/${_id}`;
  try {
    const del = await fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (del.status === 404) throw new Error("not found");
    if (del.status === 500) throw new Error("server error");
    if (!del.ok) throw new Error("can't delete the task");

    alert("task deleted successfully✅ ");
  } catch (error) {
    console.log(`can't delete the task error: ${error}`);
  }
};
