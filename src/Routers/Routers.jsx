import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../pages/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
