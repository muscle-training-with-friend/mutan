import { Link, useNavigate } from "react-router-dom";
import { React } from "react";
import TasksView from "../Components/TasksView";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-text">
        <TasksView
          onClickFactory={(task) => () => {
            navigate(`/tasks/${task.id}`);
          }}
        />

        <Link to="/task_create">
          <div className="rounded-2xl bg-bright_accent p-12">
            <div className="flex justify-center">
              <div className="ml-1 text-xl">タスクを追加する</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
