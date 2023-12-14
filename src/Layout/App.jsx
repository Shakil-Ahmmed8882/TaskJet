import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DashboardRoutes from "../Components/Dashboard/DashboardRoutes";
import TopSearchBar from "../Components/Dashboard/TopSearchBar";
import ProfileAndNotification from "../Components/Navbar/ProfileAndNotification";
import GroupAvater from "../Components/Dashboard/GroupAvater/GroupAvater";

function App() {
  return (
    <div className="flex w-full">
      <div className="">
        <DashboardRoutes></DashboardRoutes>
      </div>
      <div className="w-full">
        <div className=" items-center flex md:px-2 justify-between ">
          <div className="md:w-1/2">
            <TopSearchBar />
          </div>
          <ProfileAndNotification />
        </div>
        <div className="flex items-center md:pl-6">
          <GroupAvater></GroupAvater>
        <TopNavbar></TopNavbar>

        </div>
        <div className="md:px-6 mt-8">
          <Outlet />
        </div>
        <div className="px-6">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
