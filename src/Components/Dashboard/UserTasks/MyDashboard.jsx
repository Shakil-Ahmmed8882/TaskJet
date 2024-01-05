// import SkeletonListLoader from "../../Ui/Skeleton/SkeletonListLoader";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../../Providers/TaskProvider";
import { Checkbox } from "@nextui-org/react";
import AllTaks from "./AllTaks";
import DragAndDropTask from "./DragAndDropTask";

const MyDashboard = () => {
  const { dragOverelement, refetch, tasks } = useContext(TaskContext);

  // state management
  const [showAllTasks, setShowAllTaks] = useState(false);

  useEffect(() => {
    refetch();
  }, [refetch, dragOverelement]);



  // all task event handler 
  const handleAllTasks = () => {
    setShowAllTaks(!showAllTasks);
    console.log(showAllTasks);
  };

  return (
    <div>
      <div className="  relative pt-6">
        {tasks?.length > 0 && (
          <div className=" hidden  md:flex gap-11 bg-[white] shadow-lg justify-center rounded-lg mb-11 w-full md:w-1/2 mx-auto p-8 ">
            <Checkbox defaultSelected color="danger" size="lg">
              To-Do
            </Checkbox>
            <Checkbox defaultSelected color="warning" size="lg">
              Ongoing
            </Checkbox>
            <Checkbox defaultSelected color="success" size="lg">
              Completed
            </Checkbox>
          </div>
        )}
        <div
          onClick={() => handleAllTasks()}
          className={` my-5 cursor-pointer  inline-block px-8 py-2 ${showAllTasks?"bg-blueAccent text-[white]":"bg-[white] shadow-lg"} `}>
          {showAllTasks?"All tasks":"Drag and Drop Tasks"}
        </div>
        {/* Conditional rendering: if show all is true display all task else drag and drop page  */}
        <div
          className={`transition-opacity duration-1000`}>
          {showAllTasks ? <AllTaks /> : <DragAndDropTask />}
        </div>
      </div>
      <div className="mt-8"></div>
    </div>
  );
};

export default MyDashboard;
