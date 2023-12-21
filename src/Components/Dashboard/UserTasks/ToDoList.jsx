import { Textarea } from "@nextui-org/react";
import TitleDescription from "../../../Shared/TitleDescription";
import "./user_task.css";
import Priority from "./Priority";
import { useState } from "react";
const ToDoList = () => {

  const [selectedPriority, setSelectedPriority] = useState('Set Priority'); // Default text
  const handlePrioritySelect = (priority) => {
      setSelectedPriority(priority.label); // Update selected priority text
    };




  return (
    <div className="flex relative">
      <div className="flex  flex-1 justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-[white] sticky top-2  shadow-md rounded-md p-8">
            <div className="flex items-center">
              <TitleDescription title={"To do list"} />
          
            </div>
           
            <form className="space-y-6 mt-4" action="#" method="POST">
              <div>
                  <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block font-bold text-sm  text-gray-700">
                  Title
                </label>
                <Priority handlePrioritySelect={handlePrioritySelect} selectedPriority={selectedPriority}/>


                  </div>
                <div className="mt-1  border-b-1 border-b-[#80808082]">
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
                      label="Description"
                      labelPlacement="outside"
                      placeholder="Enter your task description"
                    />
                  </div>
                </div>

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
      <div className=" bg-primaryColor flex-1 h-[1000px]"></div>
    </div>
  );
};

export default ToDoList;
