import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { BiCalendarCheck, BiCheck, BiSolidCheckCircle } from "react-icons/bi";
import TaskModal from "../../Ui/Modal/Modal";
import { useContext, useState } from "react";
import { TaskContext } from "../../../Providers/TaskProvider";
import LoadingSpinner from "../../Ui/Spinner/Spinner";

const DragAndDropTask = () => {
  const {
    handleDeleteTask,
    dragstarted,
    dragOverelement,
    dragDrop,
    draggingOver,
    refetch,
    isLoading,
    todo,
    ongoing,
    completed,
  } = useContext(TaskContext);

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

  return (
    <div>
      <div className=" grid md:grid-cols-3 gap-3 w-full h-screen">
        {/* <div className="bg-[#f312619c] p-2  rounded-b-lg mx-3 md:mx-0"> */}
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e, refetch) => dragDrop(e, refetch)}
          className={`p-2  rounded-b-lg mx-3 md:mx-0 ${
            dragOverelement == "to-do" ? "bg-[#f31261b7]" : "bg-[#f312612d] "
          }`}
          id="to-do">
          <h1
            className={`text-2xl mb-8 ${
              dragOverelement == "to-do"
                ? "bg-[white] text-[black]"
                : "bg-primaryColor text-[white]"
            }  inline-block p-2 shadow-lg rounded-lg m-3`}>
            To-do
          </h1>
          <div className=" ">
            {todo?.map((task, index) => {
              return (
                <div
                  draggable
                  onDragStart={(e) => dragstarted(e, task?._id)}
                  key={index}
                  className={`relative bg-[white] shadow-lg rounded-lg p-2 mt-3`}>
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
                  <p className="text-[#767575] mt-2 ">
                    {task?.description.slice(0, 50)}{" "}
                  </p>
                  <div className="flex gap-1 pt-4"></div>
                  <div className="flex gap-2 absolute top-2 right-2 ">
                    <AiFillDelete
                      onClick={() => handleDeleteTask(task._id, refetch)}
                      className="cursor-pointer text-[#ff7878] text-[20px]"
                    />
                    <AiTwotoneEdit
                      onClick={() => handleModalOpen(task._id, refetch)}
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
                </div>
              );
            })}
          </div>
        </div>
        {/* Onging task */}
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
          id="ongoing"
          className={`h-screen ${
            dragOverelement == "ongoing" ? "bg-[#ff964aee]" : "bg-[#f69b5a48] "
          }`}>
          <h1
            className={`text-2xl mb-8 ${
              dragOverelement == "ongoing"
                ? "bg-[white] text-[black]"
                : "bg-[#ff964aee] text-[white]"
            }  inline-block p-2 shadow-lg rounded-lg m-3`}>
            Ongoing
          </h1>
          <div className="">
            {ongoing?.map((task, index) => {
              return (
                <div
                  draggable
                  onDragStart={(e) => dragstarted(e, task?._id)}
                  key={index}
                  className={`mx-3 relative bg-[white] shadow-lg rounded-lg p-2 mt-3`}>
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
                  <p className="text-[#767575] mt-2 ">
                    {task?.description.slice(0, 50)}{" "}
                  </p>
                  <div className="flex gap-1 pt-4"></div>
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
                </div>
              );
            })}
          </div>
        </div>
        {/* Completed task */}
        <div
          droppable
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDrop(e)}
          id="completed"
          className={`h-screen  ${
            dragOverelement == "completed" ? "bg-[#1af77ac1]" : "bg-[#18c9656f]"
          } w-full`}>
          <h1
            className={`text-2xl mb-8 ${
              dragOverelement == "completed"
                ? "bg-[white] text-[black]"
                : "bg-[#1af77ac1] text-[white]"
            }  inline-block p-2 shadow-lg rounded-lg m-3`}>
            Completed
          </h1>
          <div className="mx-3">
            {completed?.map((task, index) => {
              return (
                <div
                  draggable
                  onDragStart={(e) => dragstarted(e, task?._id)}
                  key={index}
                  className={`relative bg-[white] shadow-lg rounded-lg p-2 mt-3`}>
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
                  <p className="text-[#767575] mt-2 ">
                    {task?.description.slice(0, 50)}{" "}
                  </p>
                  <div className="flex gap-1 pt-4"></div>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDropTask;
