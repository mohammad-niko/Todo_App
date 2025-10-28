
// Action Types:

// Getters Types:
export const GETALLREQUEST = "TASK/GET-ALL-REQUEST";
export const GETALLSUCCESS = "TASK/GET-ALL-SUCCESS";
export const GETALLFAILURE = "TASK/GET-ALL-FAILURE";

// Adders Types:
export const ADDTASKREQUEST = "TASK/ADD-TASK-REQUEST";
export const ADDTASKSUCCESS = "TASK/ADD-TASK-SUCCESS";
export const ADDTASKFAILURE = "TASK/ADD-TASK-FAILURE";

// Deleters Types:
export const DELETETASKREQUEST = "TASK/DELETE-TASK-REQUEST";
export const DELETETASKSUCCESS = "TASK/DELETE-TASK-SUCCESS";
export const DELETETASKFAILURE = "TASK/DELETE-TASK-FAILURE";

// Toggle Types:
export const TOGGLETASKREQUEST = "TASK/TOGGLE-TASK-REQUEST";
export const TOGGLETASKSUCCESS = "TASK/TOGGLE-TASK-SUCCESS";
export const TOGGLETASKFAILURE = "TASK/TOGGLE-TASK-FAILURE";

// Editers Types:
export const EDITTASKREQUEST = "TASK/EDIT-TASK-REQUEST";
export const EDITTASKSUCCESS = "TASK/EDIT-TASK-SUCCESS";
export const EDITTASKFAILURE = "TASK/EDIT-TASK-FAILURE";



// Actions:

// Get All Tasks Actions:
export const GETALLActionRequest = () => ({
  type: GETALLREQUEST,
});

export const GETALLActionSuccess = (tasks) => ({
  type: GETALLSUCCESS,
  payload: tasks,
});

export const GETALLActionFailure = (error) => ({
  type: GETALLFAILURE,
  payload: error,
}); 


// Add Task Actions:
export const ADDTASKACTIONREQUEST = ()=>({
    type: ADDTASKREQUEST,
})

export const ADDTASKACTIONSUCCESS = (task)=>({
type:ADDTASKSUCCESS,
payload:task,
})

export const ADDTASKACTIONFAILURE = (error)=>({
    type:ADDTASKFAILURE,
    payload:error,
})

// Delete Task Actions:
export const DELETETASKACTIONREQUEST =()=>({
    type:DELETETASKREQUEST,
})

export const DELETETASKACTIONSUCCESS =(taskID)=>({
    type:DELETETASKSUCCESS,
    payload:taskID,
})

export const DELETETASKACTIONFAILURE =(error)=>({
    type:DELETETASKFAILURE,
    payload:error,
})

// Toggle Task Actions:
export const TOGGLETASKACTIONREQUEST=()=>({
    type:TOGGLETASKREQUEST,
})

export const TOGGLETASKACTIONSUCCESS=(taskID)=>({
    type:TOGGLETASKSUCCESS,
    payload:taskID,
})

export const TOGGLETASKACTIONFAILURE=(error)=>({
    type:TOGGLETASKFAILURE,
    payload:error,
})

// Edit Task Actions:
export const EDITTASKACTIONREQUEST=()=>({
    type:EDITTASKREQUEST,
})

export const EDITTASKACTIONSUCCESS=(newtask)=>({
    type:EDITTASKSUCCESS,
    payload:newtask,
})

export const EDITTASKACTIONFAILURE=(error)=>({
    type:EDITTASKFAILURE,
    payload:error,
})