import { useContext, useState } from "react";
import TrainingInstanceCard from "../Components/TrainingInstanceCard";
import Modal from "../Components/Modal";
import { createTask } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingInstanceBuilder from "../Components/TrainingInstanceBuilder";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const token = useContext(TokenContext);
  const [form, setForm] = useState({
    name: "",
    description: "",
    training_instances: [],
  });
  const [modalVisible, setModalVisible] = useState(false);

  const createTrainingInstanceFn = (training_instance) => {
    setForm((prev) => ({
      ...prev,
      training_instances: [...prev.training_instances, training_instance],
    }));
    setModalVisible(false);
  };

  const createTaskFn = async () => {
    const striped = {
      ...form,
      training_instances: form.training_instances.map((training_instance) => ({
        training_id: training_instance.id,
        weight: training_instance.weight,
        times: training_instance.times,
      })),
    };
    await createTask({ ...striped, token });

    navigate("/tasks");
  };

  return (
    <>
      <Modal visible={modalVisible}>
        <TrainingInstanceBuilder build={createTrainingInstanceFn} />
      </Modal>

      <div className="text-text">
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-6">
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full rounded-2xl bg-bright_accent p-2"
            placeholder="タスク名"
          />

          <textarea
            rows="3"
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            className="mt-6 w-full rounded-2xl bg-bright_accent p-2"
            placeholder="説明"
          />
        </div>

        {form.training_instances.map((training_instance) => (
          <TrainingInstanceCard training_instance={training_instance} />
        ))}

        <div onClick={(_) => setModalVisible(true)}>
          <div className="my-6 flex justify-center rounded-2xl bg-bright_accent p-6">
            <div className="text-lg ">トレーニングを追加</div>
          </div>
        </div>

        <div onClick={createTaskFn}>
          <div className="my-6 flex justify-center rounded-2xl bg-bright_accent bg-gradient-to-br from-bright_accent to-accent p-6 text-text hover:bg-accent hover:text-inverted_text">
            <div className="text-lg font-bold ">完了</div>
          </div>
        </div>
      </div>
    </>
  );
}
