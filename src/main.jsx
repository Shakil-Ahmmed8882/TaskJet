import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Next ui */}
    <NextUIProvider>
      {/* auth */}
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster/>
      </AuthProvider>
    </NextUIProvider>

    {/* Next ui Provider */}
  </React.StrictMode>
);
