import React from "react";
import { useStopwatch } from 'react-timer-hook';
import { TokenContext } from "../Components/TokenContext";
import { useState, useContext, useEffect } from "react";
import { getTaskInstance, proceedTaskInstance } from "../adapter";

import { createTaskInstance } from "../adapter";
import { createTask } from "../adapter";
import { Link } from "react-router-dom";

export default function () {
  const token = useContext(TokenContext)
  const [tasks, setTasks] = useState([]);
  const [proceed, setproceed] = useState(0);

  const fn1 = async () => {
    const tasks1 = await createTaskInstance({
      token,
      task_id: 16,
    });
  }
  useEffect(() => {
    fn1();
    console.log("rendering")
  }, []);

  const fn = async () => {
    const tasks = await getTaskInstance({
      token,
    });
    setTasks(tasks);
  }
  useEffect(() => {
    fn();
  }, [proceed]);

  const { seconds, minutes, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const current_training = () => {
    if (proceed != tasks.training_instances.length) {
      console.log(tasks.training_instances.length)
      console.log(proceed)
      const counter = tasks.progress
      return (
        <div>
          <div>{tasks.training_instances[counter].name}</div>
          <div>{tasks.training_instances[counter].weight} kg : {tasks.training_instances[counter].times} 回</div>
        </div>
      );
    } else {
      return (
        <div>good job!</div>
      );
    }
  }

  const next_training = () => {
    setproceed(proceed + 1)
    proceedTaskInstance({
      token,
      progress: proceed
    })
  }

  const button_group = () => {
    if (proceed != tasks.training_instances.length) {
      return (
        <div>
          <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]" onClick={start}>開始</div>
          <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]" onClick={pause}>ストップ</div>
          <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]" onClick={next_training}>完了</div>
        </div>
      );
    }
    else {
      return (
        <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]">
          <Link to="/tasks">完了</Link>
        </div>
      );
    }
  }

  return (
    <>
      {tasks.length != 0 ? (
        <>
          {current_training()}
        </>
      ) : undefined}

      <div className="flex justify-center font-sm pt-16 text-muted_text">timer is...
        <div className="flex justify-center font-sm">{isRunning ? "running" : "not running"}</div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-full h-80 w-80 bg-gradient-to-br from-bright_accent to-accent my-6 p-3">
          <div className="rounded-full h-full w-full bg-white">
            <div className="flex justify-center text-slate-900 text-7xl font-bold pt-24">
              {minutes >= 10 ? minutes : ("0" + minutes)}:{seconds >= 10 ? seconds : ("0" + seconds)}
            </div>
          </div>
        </div>
      </div>

      {tasks.length != 0 ? (
        <>
          <div className="rounded-2xl py-5 my-10">
            <div className="grid grid-cols-3 gap-6 content-center">
              {button_group()}
            </div>
          </div>
        </>
      ) : undefined}

    </>
  );
}
