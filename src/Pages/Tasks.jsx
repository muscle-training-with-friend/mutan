import { Link } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import TasksView from "../Components/TasksView";

export default function () {

  return (
    <>
      <div className="text-text">
        <>
          <div className="text-2xl font-bold">最近のタスク</div>
          <TasksView
            originOrder={"latest"}
          />
        </>
        <>
          <div className="text-2xl font-bold">すべてのタスク</div>
          <TasksView
            originOrder={"name"}
          />
        </>

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
