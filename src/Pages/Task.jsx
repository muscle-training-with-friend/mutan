import { useNavigate, useParams } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { createTaskInstance, getTask } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingInstanceCard from "../Components/TrainingInstanceCard";
import Modal from "../Components/Modal";

export default function () {
  const token = useContext(TokenContext);
  const { id } = useParams();
  const [task, setTask] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const fetchTask = async () => {
    if (token) {
      const task = await getTask({ token, id: parseInt(id) });
      setTask(task);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [token]);

  const startTask = async () => {
    try {
      await createTaskInstance({ token, task_id: parseInt(id) });
      navigate("/task_run");
    } catch (error) {
      setModalVisible(true);
    }
  };

  return (
    <>
      <Modal visible={modalVisible}>エラーが発生しました.</Modal>

      <div className="text-text">
        {task ? (
          <>
            <div>名前 {task.name}</div>
            <div>説明 {task.description || ""}</div>

            {task.training_instances.map((training_instance) => (
              <TrainingInstanceCard training_instance={training_instance} />
            ))}

            <button onClick={startTask}>開始する</button>
          </>
        ) : undefined}
      </div>
    </>
  );
}