import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo";
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
import { UseAuth } from "../../Hooks/UseAuth";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";
import { BsBlockquoteRight } from "react-icons/bs";
import { BsPen } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";
import { AiFillDelete, AiOutlineDashboard } from "react-icons/ai";
import { TaskContext } from "../../Providers/TaskProvider";
import { useContext, useEffect } from "react";

const DashboardRoutes = () => {
  const { user } = UseAuth();
  let {

    // dragstarted,
    dragOverelement,
    setDragOverelement,
    dragDrop,
    refetch,
    draggingOver,
  } = useContext(TaskContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Update the dragOverelement state after two seconds
      setDragOverelement(null); 
    }, 2000);

     // Clean up the timer on unmount or re-render
    return () => clearTimeout(timer);
  }, [dragOverelement,setDragOverelement]);

  

  return (
    <div className="md:p-4  bg-[#FFFFFF] pl-[10px] h-full z-30 fixed md:pl-[25px]">
      <div className="w-[180px] overflow-x-hidden relative hidden md:block overflow-auto hide-scrollbar   h-screen">
        <div className="fixed top-0 z-50 bg-[white] w-[180px] ">
          <Logo></Logo>
        </div>
        <div className="bg-[#F4F8FB] mt-16  ml-[25px] w-28 h-28 flex items-center justify-center  rounded-full">
          <Avatar
            className="mx-auto z-20 my-8 bg-primaryColor w-[90px] h-[90px]"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
            }`}
          />
        </div>
        <div>
          <h1 className="text-[18px] ml-[25px] mb-[3px] font-bold">
            {user ? user.displayName : "Garry"}
          </h1>
          <p className="text-[15px] text-[gray] pl-6">
            {user ? user.email : "user@gmail.com"}
          </p>
        </div>

        <ul className="flex flex-col gap-y-2 routes">
          <Link to="/dashboard" className="mt-3">
            <li className="flex items-center gap-2">
              <AiOutlineDashboard />
              Dashboard
            </li>
          </Link>

          <Link to="/dashboard/quick_start">
            <li className="flex items-center gap-2">
              <BsAlignStart />
              Quick start
            </li>
          </Link>

          <Link to="/dashboard/create_to_do">
            <li className="flex items-center gap-2">
              <BsPen />
              Create To-do
            </li>
          </Link>
          <Link to="/dashboard/to-do-list">
            <li className="flex items-center gap-2">
              <BsBlockquoteRight />
              To-Do-List
            </li>
          </Link>
          <Link to="/dashboard/ongoing_tasks">
            <li className="flex items-center gap-2">
              <BsDropletHalf />
              Ongoing tasks
            </li>
          </Link>
          <Link to="/dashboard/completed_tasks">
            <li className="flex items-center gap-2">
              <BsFileEarmarkCheck />
              Completed tasks
            </li>
          </Link>
          <hr />
          <Link to="/dashboard">
            <li
              droppable
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e)=>dragDrop(e,refetch)}
              className={`p-2 flex items-center z-50 gap-2 relative rounded-b-lg mx-3 md:mx-0`}
              id="trash">
              {/* This is style to effect when dragging to the trach can  */}
              {/* {dragOverelement == "to-do" && (
                <div>
                  <div
                    className={` flex items-center z-30 gap-2 -top-36 duration-100 left-0 w-44 h-80 rounded-r-full absolute   mx-3 md:mx-0 bg-[#f3126142]
                }`}></div>
                </div>
              )} */}
              <AiFillDelete className={`${dragOverelement == "trash"?'text-[red]':""}`}/> Trash
            </li>
          </Link>
          <Link to="/dashboard/tasks">
            <li className="flex items-center gap-2">
              <BiTask />
              Tasks
            </li>
          </Link>
          <Link to="/dashboard/notes">
            <li className="flex items-center gap-2">
              <BiNote />
              Notes
            </li>
          </Link>
          <Link to="/dashboard/archive">
            <li className="flex items-center gap-2">
              <BiArchive />
              Archive
            </li>
          </Link>
          <Link to="/dashboard/calendar">
            <li className="flex items-center gap-2">
              <BiCalendar /> Calendar
            </li>
          </Link>
          <Link to="/dashboard/categories">
            <li className="flex items-center gap-2">
              <BiCategory />
              Categories
            </li>
          </Link>
          <Link to="/dashboard/statistics">
            <li className="flex items-center gap-2">
              <CiCircleChevDown />
              Statistics
            </li>
          </Link>
          <Link to="/dashboard/template">
            <li className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/6ghZckZ/icons8-template-100.png"
                alt=""
                className="w-[18px]"
              />
              Templates
            </li>
          </Link>
          <Link to="/dashboard/remainders">
            <li className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/wY5Q7nY/icons8-remainder-64.png"
                alt="Remainder bell"
                className="w-[18px]"
              />
              Remainders
            </li>
          </Link>
          <Link to="/dashboard/collaboration">
            <li className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/z46yBs2/icons8-community-50.png"
                alt=""
                className="w-[18px]"
              />
              Collaboration
            </li>
          </Link>
          <Link to="/dashboard/deadline_tracker">
            <li className="flex items-center gap-2">
              <BsClockHistory />
              Deadline tracker
            </li>
          </Link>

          <Link to="/dashboard/progress_tracker">
            <li className="flex items-center gap-2">
              <img
                className="w-[18px]"
                src="https://i.ibb.co/6nY4Q9n/icons8-progress-64.png"
                alt=""
              />
              Progress tracker
            </li>
          </Link>
          <Link to="/dashboard/notifications">
            <li className="flex items-center gap-2">
              <BsBell />
              Notifications
            </li>
          </Link>
          <Link to="/dashboard/setting">
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
