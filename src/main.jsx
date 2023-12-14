import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers";
import {NextUIProvider} from "@nextui-org/react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
    <NextUIProvider>
    <RouterProvider router={router} />
    </NextUIProvider>

    </div>
    {/* Next ui Provider */}
  </React.StrictMode>
);
