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
import GlowButton from "../Components/GlowButton";
import TrainingInstanceCard from "../Components/TrainingInstanceCard";

export default function () {
  const navigate = useNavigate();

  const token = useContext(TokenContext);
  const [taskInstance, setTaskInstance] = useState(undefined);
  const {
    seconds,
    minutes,
    start: startHandle,
    pause: pauseHandler,
  } = useStopwatch({ autoStart: false });

  const fetchTaskInstance = async () => {
    if (token) {
      const taskInstance = await getTaskInstance({ token });
      setTaskInstance(taskInstance);
    }
  };

  useEffect(() => {
    fetchTaskInstance();
  }, [token]);

  // タスクの進行
  const proceedHandle = async () => {
    const nextProgress = taskInstance.progress + 1;

    // 進行度を増加
    if (nextProgress < taskInstance.training_instances.length) {
      setTaskInstance({ ...taskInstance, progress: nextProgress });
      proceedTaskInstance({ token, progress: nextProgress });

      // タスクを完了
    } else {
      await deleteTaskInstance({ token });
      navigate("/");
    }
  };

  // fallback
  if (!taskInstance) {
    return <div>読み込み中</div>;
  }

  return (
    <>
      <div className="-mt-2">
        <TrainingInstanceCard
          trainingInstance={
            taskInstance.training_instances[taskInstance.progress]
          }
        />
      </div>


      <div className="flex justify-center">
        <div className="my-12 h-80 w-80 rounded-full bg-gradient-to-br from-bright_accent to-accent p-2">
          <div className="h-full w-full rounded-full bg-white">
            <div className="flex justify-center p-24 text-8xl text-text">
              {("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2)}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl py-5">
        <div className="grid grid-cols-3 content-center gap-6">
          <GlowButton onClick={startHandle}><div className="text-text py-1 font-bold">開始</div></GlowButton>
          <GlowButton onClick={pauseHandler}><div className="text-text font-bold">ストップ</div></GlowButton>
          <GlowButton onClick={proceedHandle}><div className="text-text font-bold">完了</div></GlowButton>
        </div>
      </div>
    </>
  );
}
