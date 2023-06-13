import { Link } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { TokenContext } from "../Components/TokenContext";
import { createTaskInstance } from "../adapter";


export default function ({ task }) {
  const token = useContext(TokenContext);

  const addTraining = () => {
    createTaskInstance({
      token,
      task_id : task.id})
  }

  return (
    <Link onClick={() => addTraining} to="/doneTask">
      <div className="my-5 rounded-3xl bg-gradient-to-br from-bright_accent to-accent p-6">
        <div className="flex justify-center text-lg font-bold">{task.name}</div>

        <div className="py-3">
          {task.training_instances.map((training_instance) => (
            <div className="text-sm">{training_instance.name}</div>
          ))}
        </div>
      </div>
    </Link>
  );
}
