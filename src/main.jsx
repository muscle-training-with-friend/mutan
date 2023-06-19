import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandscapeRouteContainer from "./Pages/LandscapeRouteContainer";
import ErrorPage from "./Pages/ErrorPage";
import Landing from "./Pages/Landing";
import NavbarRouteContainer from "./Pages/NavbarRouteContainer";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import TaskCreate from "./Pages/TaskCreate";
import Task from "./Pages/Task";
import TaskRun from "./Pages/TaskRun";
import Statistics from "./Pages/Statistics";
import Trainings from "./Pages/Trainings";
import "./index.css";
import { TokenContextProvider } from "./Components/TokenContext";

const router = createBrowserRouter(
  [
    {
      element: <LandscapeRouteContainer />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          element: <NavbarRouteContainer />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/tasks",
              element: <Tasks />,
            },
            {
              path: "/task_create",
              element: <TaskCreate />,
            },
            {
              path: "/tasks/:id",
              element: <Task />,
            },
            {
              path: "/task_run",
              element: <TaskRun />,
            },
            {
              path: "/statistics",
              element: <Statistics />,
            },
            {
              path: "/trainings",
              element: <Trainings />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/mutan/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenContextProvider>
      <RouterProvider router={router} />
    </TokenContextProvider>
  </React.StrictMode>
);
