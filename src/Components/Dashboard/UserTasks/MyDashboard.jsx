import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { UseAuth } from "../../../Hooks/UseAuth";
import { useGetData } from "../../../Hooks/useGetData";
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
// import { successToast } from "../../../utils/SuccessToast";
import SkeletonListLoader from "../../Ui/Skeleton/SkeletonListLoader";
import Tabs from "./Tabs";
import ToDoList from "./ToDoList";
import OngoingTasks from "./OngoingTasks";
import CompletedTasks from "./CompletedTasks";

const MyDashboard = () => {
  const { user } = UseAuth();
  const xiosPublic = usePublicApi();
  const [dragOverelement, setDragOverelement] = useState(null);

  // tabs state
  const [openTab, setOpenTab] = useState(0);
  const [activeTab, setActiveTab] = useState("to-do");

  // console.log(activeTab)

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
    e.dataTransfer.setData("text/plain", _id);
    // console.log('Dragged Task ID:', _id);
  };

  setTimeout(() => {
    setDragOverelement(null);
  }, 2000);

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
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${res.data.title} changed state into ${dragOverelement}`,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setDragOverelement(null);

      Swal.fire({
        position: "top-right",
        icon: "error",
        title: `Already state is `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Tabs event handler

  const handleTabClick = (tabNumber) => {
    const activeTab =
      tabNumber == 1 ? "to-do" : tabNumber == 2 ? "ongoing" : "completed";

    setOpenTab(tabNumber);
    setActiveTab(activeTab);
  };

  return (
    <div>
      {/* Drag container */}
      <div
        className={`sidebar rounded-lg duration-1000 cursor-pointer transition-all  ${
          dragOverelement ? "w-60" : "w-4 md:w-6"
        } h-[90vh] top-20 fixed z-50 right-0`}>
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
          className={` h-[30%] ${
            dragOverelement == "to-do" ? "bg-[#f31261b7]" : "bg-[#f312612d] "
          }`}
          id="to-do"></div>
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
          id="ongoing"
          className={`h-[30%] ${
            dragOverelement == "ongoing" ? "bg-[#ff964aee]" : "bg-[#f69b5a48] "
          }`}></div>
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
          id="completed"
          className={`${
            dragOverelement == "completed" ? "bg-[#1af77ac1]" : "bg-[#18c9656f]"
          } w-full h-[30%]`}></div>
      </div>
      {/* Drag container ends here...*/}

      <div className="  relative pt-6">
        {/* <TitleDescription
          title={"My dashboard"}
          // description={
          //   "Display summary statistics:Total number of tasks.Number of tasks in each category (To Do, Ongoing, Completed).Recent activity or updates related to tasks.Graphical representation (optional) for visualizing task distribution.User's Experience: When users land on the Dashboard, they get a quick glance at their tasks. They can see how many tasks they have, which tasks are pending, ongoing, or completed, and any recent updates, allowing them to plan their work effectively."
          // }
        /> */}
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
        <Tabs handleTabClick={handleTabClick} openTab={openTab} />
        {openTab == 0 ? (
          <ul
            className={`p-5 grid grid-cols-1 ${
              tasks?.length > 0 && "md:grid-cols-2"
            } gap-6`}>
            {/* maping the newly added task */}

            {tasks?.length > 0 ? (
              tasks?.map((task, index) => (
                <li
                  draggable
                  onDragStart={(e) => dragstarted(e, task?._id)}
                  key={index}
                  className={`relative bg-[white] shadow-lg rounded-lg p-5`}>
                  {/* Your task item content */}
                  <div>
                    <div className="flex items-center gap-1">
                      <h2 className="text-[20px] font-semibold">
                        {task.title}
                      </h2>
                      <span className="text-[20px] font-bold">
                        {task.priority === "High" ? (
                          <BiSolidCheckCircle className={`text-greenAccent`} />
                        ) : task.priority === "Moderate" ? (
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
                    <Progress
                      state={task?.progress}
                      id={task?._id}
                      dragOverelement={dragOverelement}
                      refetch={refetch}
                    />
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
              ))
            ) : (
              <div className="w-full h-full flex  flex-col items-center  justify-center">
                <h1 className="text-4xl mt-6 mb-8">
                  No task gets included yet
                </h1>
                <SkeletonListLoader />
                <SkeletonListLoader />
                <SkeletonListLoader />
              </div>
            )}
          </ul>
        ) : openTab == 1 ? (
          <ToDoList />
        ) : openTab == 2 ? (
          <OngoingTasks />
        ) : (
          <CompletedTasks />
        )}
      </div>
      <div className="mt-8"></div>
    </div>
  );
};

export default MyDashboard;
