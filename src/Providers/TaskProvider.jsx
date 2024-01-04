import Swal from "sweetalert2";
import usePublicApi from "../Hooks/usePublicApi";
import { createContext, useState } from "react";
import { successToast } from "../utils/SuccessToast";
import { errorToast } from "../utils/ErrorToast";

export const TaskContext = createContext(null)
const TaskProvider = ({children}) => {
      const xiosPublic = usePublicApi()
      const [dragOverelement, setDragOverelement] = useState(null);
      const [draggingTaskId,setDraggingTaskId] = useState("")

        //  Event for deleting an added task
  const handleDeleteTask = async (_id,refetch) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this task anymore!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await xiosPublic.delete(`task?id=${_id}`);
          const isTaskDeleted = await response.data;
          if (isTaskDeleted.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "This task has been deleted.",
              icon: "success",
            });
          }
        }
      });
    };


  // dragging start event
  const dragstarted = (e, _id) => {
    setDraggingTaskId(_id)
    e.dataTransfer.setData("text/plain", _id);
  };

   // Over the element the task being dragged
   const draggingOver = (e) => {
    e.preventDefault();
    setDragOverelement(e.target.id);
  };

// The category dragged task will be dropped
const dragDrop = async (e) => {
  e.preventDefault();
  const transferredId = e.dataTransfer.getData("text/plain");
  // This will give you the element where the item was dropped
  const droppedOnElement = e.target;
  //getting task state like to-do, ongoing,completed as set into id
  const state = droppedOnElement.id;
  const response = await xiosPublic.patch(
    `/task?id=${transferredId}&state=${state}`
  );
  const changedStateTask = response.data;

  // if task state is changed into new state
  if (changedStateTask.modifiedCount > 0) {
    // setting the it to null for the expanded bar to be collapsed
    setDragOverelement(null);
    // getting that dropped task based on id to show a toast
    // with the task's new state name
    xiosPublic
      .get(`/task?taskId=${transferredId}`)
      .then((res) => {
        successToast(`${res.data.title} changed state into ${dragOverelement}`)
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    setDragOverelement(null);

    errorToast(`Already state is ${dragOverelement}`)
  }
};



    const taskInfo = {
      handleDeleteTask,
      dragstarted,
      draggingOver,
      dragOverelement,
      setDragOverelement,
      dragDrop,
      draggingTaskId
      
    }


    
      return (
            <TaskContext.Provider value={taskInfo}>
                  {children}
            </TaskContext.Provider>
      );
};

export default TaskProvider;