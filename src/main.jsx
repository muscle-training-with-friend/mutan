import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandscapeRouteContainer from "./Pages/LandscapeRouteContainer";
import ErrorPage from "./Pages/ErrorPage";
import Landing from "./Pages/Landing";
import NavbarRouteContainer from "./Pages/NavbarRouteContainer";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import CreateTask from "./Pages/CreateTask";
import AddTraining from "./Pages/AddTraining";
import DoneTask from "./Pages/DoneTask";
import Timer from "./Pages/Timer";
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
              path: "/createTask",
              element: <CreateTask />,
            },
            {
              path: "/addTraining",
              element: <AddTraining />,
            },
            {
              path: "/doneTask",
              element: <DoneTask />,
            },
            {
              path: "/timer",
              element: <Timer />,
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
