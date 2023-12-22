import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { UseAuth } from "../../../Hooks/UseAuth";
import { useGetData } from "../../../Hooks/useGetData";
import TitleDescription from "../../../Shared/TitleDescription";
import TaskModal from "../../Ui/Modal/Modal";
// import SkeletonListLoader from "../../Ui/Skeleton/SkeletonListLoader";
import { BiCalendarCheck, BiCheck, BiSolidCheckCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { TaskContext } from "../../../Providers/TaskProvider";
import { Checkbox } from "@nextui-org/react";
import Progress from "./Progress";
import LoadingSpinner from "../../Ui/Spinner/Spinner";
import usePublicApi from "../../../Hooks/usePublicApi";
import Swal from "sweetalert2";

const MyDashboard = () => {
  const { user } = UseAuth();
  const xiosPublic = usePublicApi()
  const [dragOverelement,setDragOverelement] = useState(null)

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useGetData(`tasks?email=${user && user.email}`, user?.email);
  const { handleDeleteTask } = useContext(TaskContext);

  // Editing modal handling here..
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskId, setTaskId] = useState("");

  const handleModalOpen = (_id) => {
    refetch();
    // Function to set the modal as open
    setIsModalOpen(true);
    setTaskId(_id);
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const dragstarted = (e, _id) => {
    e.dataTransfer.setData('text/plain', _id);
    // console.log('Dragged Task ID:', _id);
  };

  const draggingOver = (e) => {
    e.preventDefault();
    // console.log('Dragging Over:', e.target);
    setDragOverelement(e.target.id)
  };
  const dragDrop = async(e) => {
    e.preventDefault();
    const transferredId = e.dataTransfer.getData('text/plain');
    const droppedOnElement = e.target; // This will give you the element where the item was dropped
    const state = droppedOnElement.id
    const response = await xiosPublic.patch(`/task?id=${transferredId}&state=${state}`);
          const changedStateTask = response.data;

          if (changedStateTask.modifiedCount > 0) {
             xiosPublic.get(`/task?taskId=${transferredId}`)
             .then(res => {
               Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: `${res.data.title} changed state into 
                 ${state}`,
                 showConfirmButton: false,
                 timer: 1500
               });

             })
          }
  };
  


  console.log(dragOverelement)
  return (
    <div>
          {/* Drag container */}
          <div className="sidebar rounded-lg duration-1000 cursor-pointer transition-all w-60 h-[90vh] top-20 fixed z-50 right-0">
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
          className={` h-[30%] ${dragOverelement == "to-do"?"bg-[#f31261b7]":"bg-[#f312612d] "}`} 
          id="to-do"
        ></div>
        <div
        droppable
        onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
        id="ongoing"
        className={`h-[30%] ${dragOverelement == "ongoing"?"bg-[#ff964aee]":"bg-[#f69b5a48] "}`} 
></div>
        <div
        droppable 
        onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
        id="completed"
        className={`${dragOverelement == "completed"?"bg-[#1af77ac1]":"bg-[#18c9656f]"} w-full h-[30%]`}></div>
      </div>
    {/* Drag container ends here...*/}

      <div className="  overflow-auto relative pt-6">
        {tasks?.length > 0 && (
          <div className="  flex gap-11 bg-[white] shadow-lg justify-center rounded-lg mb-11 w-full md:w-1/2 mx-auto p-8 ">
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
        <ul className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* maping the newly added task */}

          {tasks?.length > 0 &&
            tasks?.map((task, index) => (
              <li
              draggable
              onDragStart={(e) => dragstarted(e, task?._id)}
              key={index}
              className={`relative bg-[white] shadow-lg rounded-lg p-5`}
            >
              {/* Your task item content */}
              <div>
                <div className="flex items-center gap-1">
                  <h2 className="text-[20px] font-semibold">{task.title}</h2>
                  <span className="text-[20px] font-bold">
                    {task.priority === 'High' ? (
                      <BiSolidCheckCircle className={`text-greenAccent`} />
                    ) : task.priority === 'Moderate' ? (
                      <BiCalendarCheck className="text-[orange]" />
                    ) : (
                      <BiCheck className="text-[red]" />
                    )}
                  </span>
                </div>
                <span className="bg-[#E4F4FD] p-1 inline-block mt-2 text-[13px] text-accentColor rounded-lg">
                  {task.deadline}
                </span>
                {/* Task status todo, ongoing, completed */}
              </div>
              <p className="text-[#767575] mt-2 ">{task.description} </p>
              <div className="flex gap-1 pt-4">
                <Progress state={task?.progress} id={task?._id} />
              </div>
              <div className="flex gap-2 absolute top-2 right-2 ">
                <AiFillDelete
                  onClick={() => handleDeleteTask(task._id, refetch)}
                  className="cursor-pointer text-[#ff7878] text-[20px]"
                />
                <AiTwotoneEdit
                  onClick={() => handleModalOpen(task._id)}
                  className="cursor-pointer text-[20px]"
                />

                {/* When clicking on edit, the below modal will be displayed */}
                <TaskModal
                  refresh={refetch}
                  isOpen={isModalOpen}
                  setIsOpen={setIsModalOpen}
                  taskId={taskId}
                />
              </div>
            </li>
            ))}
        </ul>
      </div>
      <div className="mt-8">
        <TitleDescription
          title={"My dashboard"}
          description={
            "Display summary statistics:Total number of tasks.Number of tasks in each category (To Do, Ongoing, Completed).Recent activity or updates related to tasks.Graphical representation (optional) for visualizing task distribution.User's Experience: When users land on the Dashboard, they get a quick glance at their tasks. They can see how many tasks they have, which tasks are pending, ongoing, or completed, and any recent updates, allowing them to plan their work effectively."
          }
        />
      </div>

      <div>
        <div className="bg-[lime] py-80"></div>
      </div>
    </div>
  );
};

export default MyDashboard;
