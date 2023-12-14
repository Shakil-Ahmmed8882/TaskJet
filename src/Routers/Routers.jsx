import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../pages/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Tasks from "../Components/Dashboard/Tasks/Tasks";
import Notes from "../Components/Dashboard/Notes/Notes";
import Archive from "../Components/Dashboard/Archive/Archive";
import Calendar from "../Components/Dashboard/Calendar/Calender";
import Categories from "../Components/Dashboard/Categories/Categories";
import Statistics from "../Components/Dashboard/Statistics/Statistics";
import Template from "../Components/Dashboard/Template/Template";
import Remainder from "../Components/Remainder/Remainder";
import Notification from "../Components/Dashboard/Notification/Notification";
import Setting from "../Components/Dashboard/Setting/Setting";
import ProgressTracker from "../Components/Progress/ProgressTracker";
import DeadlineTracker from "../Components/Dashboard/Deadline/DeadlineTracker";
import Collaboration from "../Components/Dashboard/Collaboration/Collaboration";

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
        path: "/tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "/notes",
        element: <Notes></Notes>,
      },
      {
        path: "/archive",
        element: <Archive></Archive>,
      },
      {
        path: "/calendar",
        element: <Calendar></Calendar>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/template",
        element: <Template></Template>,
      },
      {
        path: "/remainders",
        element: <Remainder></Remainder>,
      },
      {
        path: "/collaboration",
        element: <Collaboration></Collaboration>,
      },
      {
        path: "/deadline_tracker",
        element: <DeadlineTracker></DeadlineTracker>,
      },
      {
        path: "/progress_tracker",
        element: <ProgressTracker></ProgressTracker>,
      },
      {
        path: "/notifications",
        element: <Notification></Notification>,
      },
      {
        path: "/setting",
        element: <Setting></Setting>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);
