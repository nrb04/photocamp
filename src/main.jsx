import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import AuthPovider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthPovider>
        <RouterProvider router={router} />
      </AuthPovider>
    </ThemeProvider>
  </React.StrictMode>,
);
