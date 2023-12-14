import { Avatar, Badge } from "@nextui-org/react";
import { BsBell } from "react-icons/bs";


const ProfileAndNotification = () => {
      return (
            <div>
              <div className="w-full flex items-center gap-5 justify-end px-6">
                  <div className="bg-[#fff] p-1 w-11 h-11 rounded-full ">
            <Badge content="5" color="danger" className="mr-2 mt-2 text-[13px] ">
              <BsBell className="flex justify-end-end text-3xl p-[5px]" />
            </Badge>

                  </div>
            <Avatar
              style={{ width: "30px", height: "30px" }}
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>    
            </div>
      );
};

export default ProfileAndNotification;