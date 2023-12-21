import Swal from "sweetalert2";
import usePublicApi from "../Hooks/usePublicApi";
import { createContext } from "react";

export const TaskContext = createContext(null)
const TaskProvider = ({children}) => {
      const xiosPublic = usePublicApi()

        //  Event for deleting an added task
  const handleDeleteTask = async (_id,refetch) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
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
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    };


    const taskInfo = {
      handleDeleteTask,
      
    }
      return (
            <TaskContext.Provider value={taskInfo}>
                  {children}
            </TaskContext.Provider>
      );
};

export default TaskProvider;