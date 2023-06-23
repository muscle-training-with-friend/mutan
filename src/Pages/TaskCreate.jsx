import { useContext, useState } from "react";
import TrainingInstanceCard from "../Components/TrainingInstanceCard";
import { createModal } from "../Components/Modal";
import { createTask } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingInstanceBuilder from "../Components/TrainingInstanceBuilder";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const token = useContext(TokenContext);
  const modal = createModal();
  const [form, setForm] = useState({
    name: "",
    description: "",
    trainingInstances: [],
  });

  const setFormWithName = (name) => {
    setForm((prev) => ({ ...prev, name }));
  };

  const setFormWithDescription = (description) => {
    setForm((prev) => ({ ...prev, description }));
  };

  const createTrainingInstanceHandle = (trainingInstance) => {
    setForm((prev) => ({
      ...prev,
      trainingInstances: [...prev.trainingInstances, trainingInstance],
    }));

    modal.close();
  };

  const createTaskHandle = async () => {
    const striped = {
      ...form,
      training_instances: form.trainingInstances.map((training_instance) => ({
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
      <modal.Modal>
        <TrainingInstanceBuilder onBuild={createTrainingInstanceHandle} />
      </modal.Modal>

      <div className="text-text">
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-6">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setFormWithName(e.target.value)}
            className="w-full rounded-2xl bg-bright_accent p-2"
            placeholder="タスク名"
          />

          <textarea
            rows="3"
            value={form.description}
            onChange={(e) => setFormWithDescription(e.target.value)}
            className="mt-6 w-full rounded-2xl bg-bright_accent p-2"
            placeholder="説明"
          />
        </div>

        {form.trainingInstances.map((trainingInstance) => (
          <TrainingInstanceCard trainingInstance={trainingInstance} />
        ))}

        <div onClick={modal.open}>
          <div className="my-6 flex justify-center rounded-2xl bg-bright_accent p-6">
            <div className="text-lg ">トレーニングを追加</div>
          </div>
        </div>

        <div onClick={createTaskHandle}>
          <div className="my-6 flex justify-center rounded-2xl bg-bright_accent bg-gradient-to-br from-bright_accent to-accent p-6 text-text hover:bg-accent hover:text-inverted_text">
            <div className="text-lg font-bold ">完了</div>
          </div>
        </div>
      </div>
    </>
  );
}
