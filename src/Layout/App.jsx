import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <div className="px-6">
        <Outlet />
      </div>
      <div className="px-6">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
