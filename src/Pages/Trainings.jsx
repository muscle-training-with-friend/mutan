import React, { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingCard from "../Components/TrainingCard";

export default function () {
  const token = useContext(TokenContext);
  const [trainings, setTrainings] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [part, setPart] = useState([])

  const fetchTrainings = async () => {
    if (token) {
      const trainings = await getTrainings({
        token,
        offset: 0,
        limit: 20,
        order_by: orderBy,
        descending: false,
        tag: part,
      });
      setTrainings(trainings);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [token, orderBy, part]);

  const setOrderByName = () => {
    setOrderBy("name");
  };

  const setOrderByTimes = () => {
    setOrderBy("times");
  };

  const setOrderByLatest = () => {
    setOrderBy("latest");
  };

  const filter_train = (part) => {
    setPart(part)
  }

  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>
      <button
        onClick={setOrderByName}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        名前順
      </button>
      <button
        onClick={setOrderByTimes}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        回数順
      </button>
      <button
        onClick={setOrderByLatest}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        最近
      </button>

      <button onClick={() => filter_train("胸")}>胸トレ</button>
      {trainings.map((training) => (
        <TrainingCard training={training} />
      ))}
    </>
  );
}
