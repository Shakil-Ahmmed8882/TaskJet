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
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";



const DashboardRoutes = () => {




  return (
    <div className="md:p-4 bg-[#F5F7F9] ">
      <div className="w-52 hidden md:block overflow-auto hide-scrollbar   h-screen">
        <div className="">
          <Logo></Logo>
        </div>
        <ul className="flex flex-col gap-y-2 routes">
          <Link to="/">
            <li className="flex items-center gap-1 mt-3">
              <BiHomeSmile />
              Home
            </li>
          </Link>
          <Link to="/tasks">
            <li className="flex items-center gap-1"><BiTask/>Tasks</li>
          </Link>
          <Link to="/notes">
            <li className="flex items-center gap-1"><BiNote/>Notes</li>
          </Link>
          <Link to="/archive">
            <li className="flex items-center gap-1"><BiArchive/>Archive</li>
          </Link>
          <Link to="/calendar">
            <li className="flex items-center gap-1"><BiCalendar/> Calendar</li>
          </Link>
          <Link to="/categories">
            <li className="flex items-center gap-1"><BiCategory/>Categories</li>
          </Link>
          <Link to="/statistics">
            <li className="flex items-center gap-1"><CiCircleChevDown/>Statistics</li>
          </Link>
          <Link to="/template">
            <li className="flex items-center gap-1"><BsFillGrid1X2Fill/>Templates</li>
          </Link>
          <Link to="/remainders">
            <li className="flex items-center gap-1">Remainders</li>
          </Link>
          <Link to="collaboration">
            <li className="flex items-center gap-1"><BsFillPeopleFill/>Collaboration</li>
          </Link>
          <Link to="deadline_tracker">
            <li className="flex items-center gap-1"><BsClockHistory/>Deadline tracker</li>
          </Link>
          <Link to="/progress_tracker">
            <li className="flex items-center gap-1">Progress tracker</li>
          </Link>
          <Link to="/notifications">
            <li className="flex items-center gap-1"><BsBell/>Notifications</li>
          </Link>
          <Link to="setting">
            <li className="flex items-center gap-1"> <BsGear/>Setting</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardRoutes;
