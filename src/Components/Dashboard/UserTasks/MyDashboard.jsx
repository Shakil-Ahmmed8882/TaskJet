import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { UseAuth } from "../../../Hooks/UseAuth";
import { useGetData } from "../../../Hooks/useGetData";
import TitleDescription from "../../../Shared/TitleDescription";
import TaskModal from "../../Ui/Modal/Modal";
import SkeletonListLoader from "../../Ui/Skeleton/SkeletonListLoader";
import { BiCalendarCheck, BiCheck, BiSolidCheckCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { TaskContext } from "../../../Providers/TaskProvider";
import { Checkbox } from "@nextui-org/react";

const MyDashboard = () => {
  const { user } = UseAuth();
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
    setIsModalOpen(true); // Function to set the modal as open
    setTaskId(_id);
  };

  const [selectedValue, setSelectedValue] = useState("");
  if (isLoading) return;

  const handleCheckboxChange = (value) => {
    // Update the state with the value of the checked checkbox
    setSelectedValue(value);
  };

  return (
    <div>
      <div className="  overflow-auto relative pt-11">
        <div className="  flex gap-11 bg-[white] shadow-lg justify-center rounded-lg mb-8 w-1/2 mx-auto p-8 ">
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
        <ul className="p-5 grid grid-cols-2 gap-6">
          {/* maping the newly added task */}

          {tasks?.length > 0 ? (
            tasks?.map((task, index) => (
              <li
                key={index}
                className={` relative  bg-[white] shadow-lg my-5 rounded-lg p-5`}>
                <div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[20px] mb-1 font-semibold">
                      {task.title} First task title
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
                  <span className="bg-[#E4F4FD] p-1 text-[13px] text-accentColor rounded-lg">
                    {task.deadline}
                  </span>
                  {/* task status todo, ongoing,completed */}
                </div>
                <p className="text-[#767575] mt-2 ">{task.description} </p>
                <div className="flex gap-1 pt-4">
                  <input
                    type="checkbox"
                    value="Option 1"
                    checked={selectedValue === "Option 1"}
                    onChange={() => handleCheckboxChange("Option 1")}
                  />
                  <input
                    type="checkbox"
                    value="Option 2"
                    checked={selectedValue === "Option 2"}
                    onChange={() => handleCheckboxChange("Option 2")}
                  />
                  <input
                    type="checkbox"
                    value="Option 3"
                    checked={selectedValue === "Option 3"}
                    onChange={() => handleCheckboxChange("Option 3")}
                  />
                </div>
                <div className="flex gap-2 absolute top-2 right-2 ">
                  <AiFillDelete
                    onClick={() => handleDeleteTask(task._id, refetch)}
                    className=" cursor-pointer text-[#ff6c6c] text-[20px] "
                  />
                  <AiTwotoneEdit
                    onClick={() => handleModalOpen(task._id)}
                    className=" cursor-pointer text-[20px]"
                  />

                  {/* when click on edit this below modal will be displayed */}
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
            <div className="w-full h-full flex flex-col  justify-center">
              <h1 className="text-4xl mb-8">Add your To-do here..</h1>

              <SkeletonListLoader />
              <SkeletonListLoader />
              <SkeletonListLoader />
            </div>
          )}
        </ul>
      </div>
      <div>
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
