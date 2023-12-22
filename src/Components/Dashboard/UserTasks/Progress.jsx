import { useEffect, useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import usePublicApi from "../../../Hooks/usePublicApi";
import Swal from "sweetalert2";

const Progress = ({ id }) => {
  const [selected, setSelected] = useState("to-do");
  const xiosPublic = usePublicApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await xiosPublic.patch(`/task?id=${id}&state=${selected}`);
        const changedStateTask = response.data;
        
        if(changedStateTask.modifiedCount > 0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error("Error changing progress:", error);
      }
    };

    fetchData();
  }, [id, selected, xiosPublic]);

  return (
    <div className="flex items-center gap-3">
      <RadioGroup label="" value={selected} onValueChange={setSelected}>
        <div className="flex gap-3">
          <Radio value="to-do">To-Do</Radio>
          <Radio value="ongoing">Ongoing</Radio>
          <Radio value="completed">Completed</Radio>
        </div>
      </RadioGroup>
      <p
        className={`h-4 w-4 ${selected === "to-do" ? "bg-primaryColor" : selected === "ongoing" ? "bg-[#f5a524]" : "bg-[#18c964]"}  rounded-full`}
      ></p>
    </div>
  );
};

export default Progress;