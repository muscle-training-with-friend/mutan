import React, { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "../Components/TokenContext";

export default function () {
  const [trainings, setTrainings] = useState([]);

  const token = useContext(TokenContext);
  let set_order = "name"

  const fn = async () => {
    if (token) {
      const res = await getTrainings({
        token,
        offset: 0,
        limit: 20,
        order_by: "name",
        descending: false
      });
      setTrainings(res);
    }
  };

  useEffect(() => { fn(); }, [token]);

  const name_line = () => {
    set_order = "name"
  }
  const times_line = () => {
    set_order = "times"
  }
  const latest_line = () => {
    set_order = "latest"
  }

  const filterByTag = (tag) => trainings
    .filter((training) => training.tags.includes(tag))
    .map((training) => (
      <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
        <div className="font-bold text-xl flex justify-center">{training.name}</div>
        <div className="text-sm my-2"> {training.weight}kg </div>
        <div className="text-sm my-2"> {training.times}回 </div>
        <div className="text-sm my-2"> {training.tags}</div>
      </div>
    ));

  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>
      <button onClick={name_line} className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">名前順</button>
      <button onClick={times_line} className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">回数順</button>
      <button onClick={latest_line} className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">最近</button>

      <div className="font-bold text-slate-600">・胸のトレーニング</div>
      <div>{filterByTag("胸")}</div>
      <div className="font-bold text-slate-600">・肩のトレーニング</div>
      <div> {filterByTag("肩")}</div>
      <div className="font-bold text-slate-600">・腕のトレーニング</div>
      <div>{filterByTag("腕")}</div>
      <div className="font-bold text-slate-600">・背中のトレーニング</div>
      <div>{filterByTag("背中")}</div>
      <div className="font-bold text-slate-600">・足のトレーニング</div>
      <div>{filterByTag("足")}</div>
    </>
  );
}
