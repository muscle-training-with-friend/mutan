import React, { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "../Components/TokenContext";

export default function () {
  const [trainings, setTrainings] = useState([]);
  const token = useContext(TokenContext);
  let set_order = "name"


  const fn = async () => {
    const res = await getTrainings({
      token: token,
      offset: 0,
      limit: 20,
      order_by: "name",
      descending: true,
      search: null,
      tag: null
    });
    setTrainings(res);
  };

  useEffect(() => { fn(); }, []);

  const name_line = () => {
    set_order = "name"
  }
  const times_line = () => {
    set_order = "times"
  }
  const latest_line = () => {
    set_order = "latest"
  }


  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>
      <button onclick={name_line} className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">名前順</button>
      <button onclick={times_line} className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">回数順</button>
      <button onclick={latest_line} className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">最近</button>

      <div className="font-bold text-slate-600">・胸のトレーニング</div>
      <div className="font-bold text-slate-600">・肩のトレーニング</div>
      <div className="font-bold text-slate-600">・腕のトレーニング</div>
      <div className="font-bold text-slate-600">・背中のトレーニング</div>
      <div className="font-bold text-slate-600">・足のトレーニング</div>

      {trainings.length != 0 ? (
        <>
          {trainings.map((training) => (
            <>
              <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
                <div className="font-bold text-xl flex justify-center">{training.name}</div>
                <div className="text-sm my-2"> {training.weight}kg </div>
                <div className="text-sm my-2"> {training.times}回 </div>
              </div>
            </>
          ))}

        </>
      ) : undefined}
    </>
  );
}
