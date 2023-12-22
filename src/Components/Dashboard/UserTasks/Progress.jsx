import { useEffect, useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import usePublicApi from "../../../Hooks/usePublicApi";
import Swal from "sweetalert2";

const Progress = ({ id,state }) => {
  const [selected, setSelected] = useState(state);
  const xiosPublic = usePublicApi();
  useEffect(() => {
    // Skip the initial execution of fetchData
    if (state !== selected) {
      const fetchData = async () => {
        try {
          const response = await xiosPublic.patch(`/task?id=${id}&state=${selected}`);
          const changedStateTask = response.data;

          if (changedStateTask.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The task state is changed",
              showConfirmButton: false,
              timer: 1500
            });
          }
        } catch (error) {
          console.error("Error changing progress:", error);
        }
      };

      fetchData();
    }
  }, [id, selected, state, xiosPublic]);

  return (
    <div className="flex items-center gap-3">
      <RadioGroup label="" value={selected} onValueChange={setSelected}>
        <div className="flex gap-3">
          <Radio value="to-do"></Radio>
          <Radio value="ongoing"></Radio>
          <Radio value="completed"></Radio>
        </div>
      </RadioGroup>
      <p
        className={`h-4 w-4 ${selected === "to-do" ? "bg-primaryColor" : selected === "ongoing" ? "bg-[#f5a524]" : "bg-[#18c964]"}  rounded-full`}
      ></p>
    </div>
  );
};

export default Progress;