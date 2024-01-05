import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TaskProvider from "./Providers/TaskProvider";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <TaskProvider>
          {/* Next ui */}
          <NextUIProvider>
            {/* auth */}
            <RouterProvider router={router} />
            <Toaster />
          </NextUIProvider>
        </TaskProvider>
      </AuthProvider>
    </QueryClientProvider>

    {/* Next ui Provider */}
  </React.StrictMode>
);
