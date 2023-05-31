import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../Components/TokenContext";
import { createTask } from "../adapter";

export default function () {

  const [trainings, setTrainings] = useState([]);

  const createNewTask = () => {
    let title = document.getElementById('title');
    let detail = document.getElementById('detail');
    console.log("clicked!!:title=" + title.value + ":detail=" + detail.value)
  }

  
  const showTrain = () => {
    trainings.map(
      train => {
        return (
          <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
            <div className="text-lg font-bold flex justify-center">{train.name}</div>
            <div className="text-sm">{train.default_weight_value}</div>
            <div className="text-sm">{train.default_count_value}</div>
          </div>
        );
      }
    );
  }

  const token = useContext(TokenContext);

  const fn = async () => {
    const res = await createTask({ user_token: token, name:aaa,training_instances:aaa,iii,uuu });
    setTrainings(res);
  };

  useEffect(() => {
    fn();
  }, []);


  return (
    <>
      <div className="text-text">
        <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent mb-6 p-6">
          <input type="text" id="title" placeholder="新規タスク名" required className="rounded-2xl text-text text-lg font-bold bg-bright_accent mr-60 px-4 py-2"></input>
          <div className="flex justify-center">
            <input type="text" id="detail" placeholder="新しいタスクです" required className="rounded-2xl text-sm bg-bright_accent px-24 py-10 mt-6"></input>
          </div>
        </div>

        {showTrain}

        <div className="flex justify-center">
          <button onClick={createNewTask} className="rounded-2xl w-screen h-16 bg-gradient-to-br from-bright_accent to-accent hover:bg-accent text-text font-bold hover:text-inverted_text py-2 px-4 border border-bright_accent hover:border-transparent rounded">
            タスクを作成
          </button>
        </div>

        <Link to="/addTraining">
          <div className="rounded-2xl bg-bright_accent flex justify-center my-6 p-6">
            <div className="text-lg ">トレーニングを追加</div>
          </div >

        </Link>
      </div>

    </>
  );
}
