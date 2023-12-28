import { Outlet } from "react-router-dom";
import DashboardRoutes from "../Components/Dashboard/DashboardRoutes";
import TopSearchBar from "../Components/Dashboard/TopSearchBar";
import ProfileAndNotification from "../Components/Navbar/ProfileAndNotification";

function App() {
  return (
    <div className={`flex w-full`}>
      <div className="">
        <DashboardRoutes></DashboardRoutes>
      </div>
      <div className="w-full md:ml-[220px]">
        <div className=" items-center md:flex md:px-2 md:justify-between ">
          <div className="md:w-1/2">
            <TopSearchBar />
          </div>
          <ProfileAndNotification />
        </div>
        <div></div>
        <div className="flex items-center md:pl-6"></div>
        <div className="md:px-6 mt-8 bg-[#f8fbfc]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
