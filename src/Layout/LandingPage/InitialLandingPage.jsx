import { Outlet } from "react-router-dom";
import InitialNavbar from "./Navbar/InitialNavbar";
import Footer from "./Footer";


const InitialLandingPage = () => {
      return (
            <div>
            <div className="max-w-7xl mx-auto">
                  <InitialNavbar/>
                  <div className="md:pl-11 px-3 h-[500px] overflow-hidden w-full">
                        <Outlet/>
                  
                  </div>
                  
            </div>
                  <div className="md:pl-11 px-3 bg-[#fff]"><Footer/></div>
                  
            </div>
      );
};

export default InitialLandingPage;