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

export default function TaskModal({ isOpen, setIsOpen }) {
  //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const scrollBehavior = "inside";

  //   Api instance
  const xiosPublic = usePublicApi();

  //   set up priority of the task
  const [selectedPriority, setSelectedPriority] = useState("");

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority.label); // Update selected priority text
  };

  //edit event
  const handleEditTask = async (e) => {
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

    task.priority = selectedPriority ? selectedPriority : "Moderate";

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
                  <div></div>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onClick={() => setIsOpen(false)}>
                      Close
                    </Button>
                    <Button type="submit" color="primary" onPress={onClose}>
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
