import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DashboardRoutes from "../Components/Dashboard/DashboardRoutes";
import TopSearchBar from "../Components/Dashboard/TopSearchBar";
import { BsBell } from "react-icons/bs";
import { Avatar, Badge } from "@nextui-org/react";

function App() {
  return (
    <div className="flex w-full">
      <div className="flex-1">
        <DashboardRoutes></DashboardRoutes>
      </div>
      <div className="w-full ">
        <div className="  items-center flex px-2 justify-between ">
          
          <TopSearchBar></TopSearchBar>
          <div className="w-full flex items-center gap-5 justify-end px-6">
            <Badge content="5" color="danger" className="mr-1 mt-1">
              <BsBell className="flex justify-end-end text-3xl p-[4px]" />
            </Badge>
            <Avatar
              style={{ width: "30px", height: "30px" }}
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
        </div>
        <TopNavbar></TopNavbar>
        <div className="px-6">
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
