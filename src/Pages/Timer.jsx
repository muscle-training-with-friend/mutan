import React from "react";
import { useStopwatch } from "react-timer-hook";
import { TokenContext } from "../Components/TokenContext";
import { useState, useContext, useEffect } from "react";
import {
  deleteTaskInstance,
  getTaskInstance,
  proceedTaskInstance,
} from "../adapter";
import { useNavigate } from "react-router-dom";

export default function () {
  const token = useContext(TokenContext);
  const [taskInstance, setTaskInstance] = useState(undefined);
  const navigate = useNavigate();

  const fetchTaskInstance = async () => {
    if (token) {
      const taskInstance = await getTaskInstance({ token });
      setTaskInstance(taskInstance);
    }
  };

  useEffect(() => {
    fetchTaskInstance();
  }, [token]);

  const { seconds, minutes, start, pause } = useStopwatch({ autoStart: false });

  const proceed = async () => {
    const nextProgress = taskInstance.progress + 1;

    if (nextProgress < taskInstance.training_instances.length) {
      setTaskInstance({ ...taskInstance, progress: nextProgress });
      proceedTaskInstance({ token, progress: nextProgress });
    } else {
      await deleteTaskInstance({ token });
      navigate("/");
    }
  };

  return (
    <>
      {taskInstance ? (
        <>
          <div>
            <div>
              {taskInstance.training_instances[taskInstance.progress].name}
            </div>
            <div>
              {taskInstance.training_instances[taskInstance.progress].weight} kg
              : {taskInstance.training_instances[taskInstance.progress].times}{" "}
              回
            </div>
          </div>

          <div className="flex justify-center">
            <div className="my-6 h-80 w-80 rounded-full bg-gradient-to-br from-bright_accent to-accent p-3">
              <div className="h-full w-full rounded-full bg-white">
                <div className="flex justify-center pt-24 text-7xl font-bold text-slate-900">
                  {("00" + minutes).slice(-2) +
                    ":" +
                    ("00" + seconds).slice(-2)}
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 rounded-2xl py-5">
            <div className="grid grid-cols-3 content-center gap-6">
              <div>
                <div
                  className="z-10 mx-2 flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]"
                  onClick={start}
                >
                  開始
                </div>

                <div
                  className="z-10 mx-2 flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]"
                  onClick={pause}
                >
                  ストップ
                </div>

                <div
                  className="z-10 mx-2 flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]"
                  onClick={proceed}
                >
                  完了
                </div>
              </div>
            </div>
          </div>
        </>
      ) : undefined}
    </>
  );
}
