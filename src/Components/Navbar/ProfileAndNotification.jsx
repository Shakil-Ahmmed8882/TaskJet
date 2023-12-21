import { Avatar, Badge } from "@nextui-org/react";
import { BsBell } from "react-icons/bs";
import TopNavbar from "./Navbar";
import ProfileDropdown from "./ProfileDropdown";


const ProfileAndNotification = () => {
      return (
            <div>
              <div className="w-full flex items-center gap-5 justify-end md:px-6">
              <TopNavbar/>
                  <div className="bg-[#fff] p-1 w-11 h-11 rounded-full ">
            <Badge content="5" color="danger" className="mr-2 mt-2 text-[13px] ">
              <BsBell className="flex justify-end-end text-3xl p-[5px]" />
            </Badge>

                  </div>
       <ProfileDropdown/>
          </div>    
            </div>
      );
};

export default ProfileAndNotification;