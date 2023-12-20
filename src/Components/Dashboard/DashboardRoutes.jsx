import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo";
import { BiHomeSmile } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiNote } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { CiCircleChevDown } from "react-icons/ci";
import { BsBell, BsGear } from "react-icons/bs";
// import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
// import { BsFillPeopleFill } from "react-icons/bs";
import { Avatar } from "@nextui-org/react";

const DashboardRoutes = () => {
  return (
    <div className="md:p-4  bg-[#FFFFFF] pl-[10px] h-full z-30 fixed md:pl-[25px]">
      <div className="w-[180px] relative hidden md:block overflow-auto hide-scrollbar   h-screen">
          <div className="fixed top-0 z-50 bg-[white] w-[180px] ">
          <Logo></Logo>
        </div>
        <div className="bg-[#F4F8FB] mt-16  ml-[25px] w-28 h-28 flex items-center justify-center  rounded-full">
        <Avatar className="mx-auto z-20 my-8 bg-primaryColor w-[90px] h-[90px]" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </div>
        <div>
          <h1 className="text-[18px] ml-[25px] mb-[3px] font-bold">Gary Simon</h1>
        <p className="text-[15px] text-[gray] pl-6">user@gmail.com</p>

        </div>

        <ul className="flex flex-col gap-y-2 routes">
          <Link to="/dashboard">
            <li className="flex items-center gap-2 mt-3">
              <BiHomeSmile />
              Home
            </li>
          </Link>
          <Link to="/quick_start">
            <li className="flex items-center gap-2">
              <BiHomeSmile />
              Quick start
            </li>
          </Link>
          <Link to="/tasks">
            <li className="flex items-center gap-2">
              <BiTask />
              Tasks
            </li>
          </Link>
          <Link to="/notes">
            <li className="flex items-center gap-2">
              <BiNote />
              Notes
            </li>
          </Link>
          <Link to="/archive">
            <li className="flex items-center gap-2">
              <BiArchive />
              Archive
            </li>
          </Link>
          <Link to="/calendar">
            <li className="flex items-center gap-2">
              <BiCalendar /> Calendar
            </li>
          </Link>
          <Link to="/categories">
            <li className="flex items-center gap-2">
              <BiCategory />
              Categories
            </li>
          </Link>
          <Link to="/statistics">
            <li className="flex items-center gap-2">
              <CiCircleChevDown />
              Statistics
            </li>
          </Link>
          <Link to="/template">
            <li className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/6ghZckZ/icons8-template-100.png"
                alt=""
                className="w-[18px]"
              />
              Templates
            </li>
          </Link>
          <Link to="/remainders">
            <li className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/wY5Q7nY/icons8-remainder-64.png"
                alt="Remainder bell"
                className="w-[18px]"
              />
              Remainders
            </li>
          </Link>
          <Link to="collaboration">
            <li className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/z46yBs2/icons8-community-50.png"
                alt=""
                className="w-[18px]"
              />
              Collaboration
            </li>
          </Link>
          <Link to="deadline_tracker">
            <li className="flex items-center gap-2">
              <BsClockHistory />
              Deadline tracker
            </li>
          </Link>
          <Link to="/progress_tracker">
            <li className="flex items-center gap-2">
              <img
                className="w-[18px]"
                src="https://i.ibb.co/6nY4Q9n/icons8-progress-64.png"
                alt=""
              />
              Progress tracker
            </li>
          </Link>
          <Link to="/notifications">
            <li className="flex items-center gap-2">
              <BsBell />
              Notifications
            </li>
          </Link>
          <Link to="setting">
            <li className="flex items-center gap-2">
              {" "}
              <BsGear />
              Setting
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardRoutes;
