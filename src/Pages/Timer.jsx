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
  const token = useContext(TokenContext);
  const [taskInstance, setTaskInstance] = useState(undefined);
  const navigate = useNavigate();
  const { seconds, minutes, start, pause } = useStopwatch({ autoStart: false });

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
  const proceed = async () => {
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
      <TrainingInstanceCard
        training_instance={
          taskInstance.training_instances[taskInstance.progress]
        }
      />

      <div className="flex justify-center">
        <div className="my-6 h-80 w-80 rounded-full bg-gradient-to-br from-bright_accent to-accent p-3">
          <div className="h-full w-full rounded-full bg-white">
            <div className="flex justify-center pt-24 text-7xl font-bold text-slate-900">
              {("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2)}
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 rounded-2xl py-5">
        <div className="grid grid-cols-3 content-center gap-6">
          <GlowButton onClick={start}>開始</GlowButton>
          <GlowButton onClick={pause}>ストップ</GlowButton>
          <GlowButton onClick={proceed}>完了</GlowButton>
        </div>
      </div>
    </>
  );
}
