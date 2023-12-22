import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
} from "@nextui-org/react";
import Priority from "../../Dashboard/UserTasks/Priority";
import { useState } from "react";
import usePublicApi from "../../../Hooks/usePublicApi";
import { successToast } from "../../../utils/SuccessToast";
import { errorToast } from "../../../utils/ErrorToast";
import { useGetData } from "../../../Hooks/useGetData";

export default function TaskModal({refresh, isOpen, setIsOpen, taskId }) {
  //   Api instance
  const xiosPublic = usePublicApi();
  //   set up priority of the task
  const [selectedPriority, setSelectedPriority] = useState("");

  const { data, isLoading, refetch } = useGetData(
    `/task?taskId=${taskId}`,
    taskId
  );

  if (isLoading) return 
  refetch()
  



  const {title,description,deadlineDate,deadlineTime,priority
  } = data?data:{}
  // console.log(Object.keys(data).join(""))

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority.label); // Update selected priority text
  };

  //edit event
  
  const handleEditTask = async (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const task = {};
  
      for (let [fieldName, value] of form.entries()) {
        task[fieldName] = value;
      }
  
      const deadlineDate = task["deadlineDate"];
      const deadlineTime = task["deadlineTime"];
      task.deadline = `${deadlineDate} ${deadlineTime}`;
  
      task.priority = selectedPriority ? selectedPriority : "Moderate";
  
      try {
        const response = await xiosPublic.put(`/task?id=${taskId}`, task);
        const isTaskModified = await response.data;
  
        if (isTaskModified.modifiedCount > 0) {
          successToast("Updated");
          refresh()
        } else {
          errorToast("Something went wrong! Try again!");
        }
      } catch (error) {
        errorToast("An error occurred while updating the task!");
      }

    };
  
  return (
    <div className="flex flex-col gap-2">
      {/* <Button onPress={onOpen}>Open Modal</Button> */}

      <Modal
        isOpen={isOpen}
        //     onOpenChange={onOpenChange}
        scrollBehavior={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <form className="space-y-6 mt-4" onSubmit={handleEditTask}>
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
                        defaultPriority={priority}
                      />
                    </div>
                    <div className="mt-1 border-b-1 border-b-[#80808082]">
                      <input
                        name="title"
                        placeholder="Enter your task title"
                        defaultValue={title}
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
                          defaultValue={description}
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
                          name="deadlineDate"
                          type="date"
                          defaultValue={deadlineDate}
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
                          name="deadlineTime"
                          type="time"
                          required
                          defaultValue={deadlineTime}
                          className="px-2 py-3 mt-1 block w-full rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    {/* Deadline ends here */}
                  </div>
                  <div></div>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onClick={() => setIsOpen(false)}>
                      Close
                    </Button>
                    <Button type="submit" onClick={()=> setIsOpen(false)} color="primary" onPress={onClose}>
                      Done
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
