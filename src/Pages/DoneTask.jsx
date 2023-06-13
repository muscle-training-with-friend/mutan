import { Link } from "react-router-dom";
import { getTaskInstance } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import { React, useState, useEffect, useContext } from "react";

export default function () {
  const token = useContext(TokenContext);
  const [train, setTrain] = useState([]);

  const fn = async () => {
    const training = await getTaskInstance({ token });
    setTrain(training);
  };
  useEffect(() => {
    fn();
  }, []);


  return (
    <>
      {train.length != 0 ? (
        <>
          <div className="font-bold text-slate-600">タスクの実行</div>
          {train.training_instances.map((task) => (
            <div>{task.name}</div>
          ))}
        </>
      ) : undefined}

      <Link to="/timer">トレーニングを開始</Link>
    </>
  );
}
