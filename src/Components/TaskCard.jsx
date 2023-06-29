import { React } from "react";

export default function ({ task }) {
  return (
    <div className="my-5 rounded-3xl bg-gradient-to-br from-bright_accent to-accent py-6">
      <div className="flex justify-center text-xl font-bold mb-4">{task.name}</div>
      <div className="py-1 px-6">
        {task.training_instances.map((training_instance) => (
          <div className="text-sm">・ {training_instance.name} {training_instance.weight}kg {training_instance.times}回</div>
        ))}
      </div>
    </div>
  );
}
