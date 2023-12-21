import { useState } from "react";
import { Textarea } from "@nextui-org/react";
import TitleDescription from "../../../Shared/TitleDescription";
import Priority from "./Priority";

import { BiSolidCheckCircle } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import SkeletonListLoader from "../../Ui/Skeleton/SkeletonListLoader";
import usePublicApi from "../../../Hooks/usePublicApi";
import { successToast } from "../../../utils/SuccessToast";
import { errorToast } from "../../../utils/ErrorToast";
import { UseAuth } from "../../../Hooks/UseAuth";
import TaskModal from "../../Ui/Modal/Modal";

const ToDoList = () => {
  const { user } = UseAuth();
  const [tasks, setTasks] = useState([]);
  // api instance
  const xiosPublic = usePublicApi();

  // Priority state management
  const [selectedPriority, setSelectedPriority] = useState("");

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority.label); // Update selected priority text
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const task = Object.fromEntries(form);

    //  Set deadline to the task with time
    // Extract and combine date and time values for the deadline
    const deadlineDate = form.get("deadline-date");
    const deadlineTime = form.get("deadline-time");
    // Combine date and time
    const deadline = `${deadlineDate} ${deadlineTime}`;

    // Store deadline in the task object
    task.deadline = deadline;
    task.email = user ? user.email : null;

    task.priority = selectedPriority ? selectedPriority : "Moderate";
    setTasks([...tasks, task]);

    // e.target.reset(); // Reset the form after adding the task

    // api for storing each task
    const response = await xiosPublic.post("task", task);
    const isTheTaskStored = await response.data;

    if (isTheTaskStored.insertedId) {
      successToast("Task added");
    } else {
      errorToast("Somehing went wrong! Try again!");
    }
  };

  // Editing modal handling here..

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true); // Function to set the modal as open
  };

  return (
    <div className="lg:flex relative">
      {/* CustomModal component */}

      <div className="flex  flex-1 justify-center p-4">
        <div className="w-full lg:max-w-md">
          <div className="bg-[white] sticky top-2  shadow-md rounded-md p-8">
            <div className="flex items-center">
              <TitleDescription title={"To do list"} />
            </div>
            <form className="space-y-6 mt-4" onSubmit={handleAddTask}>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block font-bold text-sm text-gray-700">
                    Title
                  </label>
                  <Priority
                    handlePrioritySelect={handlePrioritySelect}
                    selectedPriority={selectedPriority}
                  />
                </div>
                <div className="mt-1 border-b-1 border-b-[#80808082]">
                  <input
                    name="title"
                    placeholder="Enter your task title"
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <div className="w-full flex flex-col gap-2">
                    <Textarea
                      variant="underlined"
                      name="description"
                      label="Description"
                      labelPlacement="outside"
                      placeholder="Enter your task description"
                    />
                  </div>
                </div>
                {/* Deadline starts here */}
                <div className="flex space-x-4 mt-5">
                  <div>
                    <label
                      htmlFor="deadline-date"
                      className="block font-bold text-sm text-gray-700">
                      Deadline Date
                    </label>
                    <input
                      name="deadline-date"
                      type="date"
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="deadline-time"
                      className="block font-bold text-sm text-gray-700">
                      Deadline Time
                    </label>
                    <input
                      name="deadline-time"
                      type="time"
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* Deadline ends here */}
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" bg-[white] flex-1 h-[1000px]">
        <ul className="p-5">
          {/* maping the newly added task */}
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li
                key={index}
                className={` relative border-l-3 ${
                  task.priority == "High"
                    ? " border-l-greenAccent bg-[white] shadow-lg my-3 rounded-lg p-2"
                    : task.priority === "Moderate"
                    ? "border-l-[orange]"
                    : "border-l-[red]"
                } bg-[white] shadow-lg my-5 rounded-lg p-2`}>
                <div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[16px] mb-1 font-semibold">
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
                </div>
                <p className="text-[#767575] mt-2 ">{task.description} </p>
                <div className="flex gap-2 absolute top-2 right-2 ">
                  <AiFillDelete className=" cursor-pointer text-[#ff6c6c] text-[20px] " />
                  <AiTwotoneEdit
                    onClick={handleModalOpen}
                    className=" cursor-pointer text-[20px]"
                  />
                  {/* when click on edit this below modal will be displayed */}
                  <TaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
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
    </div>
  );
};

export default ToDoList;
