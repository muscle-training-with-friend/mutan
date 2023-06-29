import { useNavigate, useParams } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { createTaskInstance, getTask } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingInstanceCard from "../Components/TrainingInstanceCard";
import { createModal } from "../Components/Modal";
import InfiniteScroll from "react-infinite-scroller";
import { deleteTask } from "../adapter";

export default function () {
  const navigate = useNavigate();
  const { id } = useParams();

  const modal = createModal();
  const token = useContext(TokenContext);
  const [task, setTask] = useState(undefined);

  const fetchTask = async () => {
    if (token) {
      const task = await getTask({ token, id: parseInt(id) });
      setTask(task);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [token]);

  const createTaskInstanceHandle = async () => {
    try {
      await createTaskInstance({ token, task_id: parseInt(id) });
      navigate("/task_run");
    } catch (error) {
      modal.open();
    }
  };

  const deleteTaskHandle = async () => {
    try {
      await deleteTask({token,  id: parseInt(id)})
      navigate("/tasks");
    } catch (error){
      modal.open();
    }
  }

  return (
    <>
      <modal.Modal>エラーが発生しました.</modal.Modal>

      <div className="text-text">
        {task ? (
          <>
            <div className="text-3xl font-bold mr-44 mx-6 mb-2">タスク確認</div>
            <div className="text-sm pt-4">タスクの名前 <div className="text-xl mx-4">{task.name}</div></div>
            <div className="text-sm py-2">タスクの説明 <div className="text-xl mx-4">{task.description || ""}</div></div>

            <div className="h-[400px] overflow-scroll">
              <InfiniteScroll
                initialLoad={false}
                useWindow={false}
                threshold={20}
              >
                {task.training_instances.map((trainingInstance) => (
                  <TrainingInstanceCard trainingInstance={trainingInstance} />
                ))}
              </InfiniteScroll>
            </div>

            <div className="rounded-2xl bg-bright_accent p-12 flex justify-center">
              <button onClick={deleteTaskHandle} className="">
                <div className="ml-1 text-xl">削除する</div>
              </button>
            </div>

            <div className="rounded-2xl bg-bright_accent p-12 flex justify-center">
              <button onClick={createTaskInstanceHandle} className="">
                <div className="ml-1 text-xl">開始する</div>
              </button>
            </div>

          </>
        ) : undefined}
      </div>
    </>
  );
}
