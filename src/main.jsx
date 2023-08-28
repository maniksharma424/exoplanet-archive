import React from "react";
import ReactDOM from "react-dom/client";
import {MyRouter} from "./App";
import "./index.css";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={MyRouter}></RouterProvider>
  </React.StrictMode>
);
