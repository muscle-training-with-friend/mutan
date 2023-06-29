import { useNavigate, useParams } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { createTaskInstance, getTask } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingInstanceCard from "../Components/TrainingInstanceCard";
import { createModal } from "../Components/Modal";

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

  return (
    <>
      <modal.Modal>エラーが発生しました.</modal.Modal>

      <div className="text-text">
        {task ? (
          <>
            <div>名前 {task.name}</div>
            <div>説明 {task.description || ""}</div>

            {task.training_instances.map((trainingInstance) => (
              <TrainingInstanceCard trainingInstance={trainingInstance} />
            ))}

            <button onClick={createTaskInstanceHandle}>開始する</button>
          </>
        ) : undefined}
      </div>
    </>
  );
}
