import { Link } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { getTasks } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TaskCard from "../Components/TaskCard";

export default function () {
  const token = useContext(TokenContext);
  const [tasks, setTasks] = useState([]);
  const [latestTasks, setLatestTasks] = useState([]);

  const fetchTasks = async () => {
    const tasks = await getTasks({
      token,
      offset: 0,
      limit: 20,
      order_by: "times",
      descending: true,
    });
    setTasks(tasks);

    const latestTasks = await getTasks({
      token,
      offset: 0,
      limit: 2,
      order_by: "latest",
      descending: true,
    });
    setLatestTasks(latestTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="text-text">
        {latestTasks.length != 0 ? (
          <>
            <div className="text-2xl font-bold">最近のタスク</div>
            {latestTasks.map((task) => (
              <Link to={`/tasks/${task.id}`}>
                <TaskCard task={task} />
              </Link>
            ))}
          </>
        ) : undefined}

        {tasks.length != 0 ? (
          <>
            <div className="text-2xl font-bold">すべてのタスク</div>
            {tasks.map((task) => (
              <Link to={`/tasks/${task.id}`}>
                <TaskCard task={task} />
              </Link>
            ))}
          </>
        ) : undefined}

        <Link to="/task_create">
          <div className="my-5 rounded-3xl bg-bright_accent p-6">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="ml-1 text-lg">タスクを追加する</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
