import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TokenContext } from "../Components/TokenContext";
import { createTask } from "../adapter";

export default function () {

  const createNewTask = () => {
    let title = document.getElementById('title');
    let detail = document.getElementById('detail');
    console.log("clicked!! title="+title.value+"detail="+detail.value)
  }

  return (
    <>
      <div className="text-text">
        <div className="rounded-lg bg-gradient-to-br from-bright_accent to-accent mb-6 p-6">
          <input type="text" id="title" placeholder="新規タスク" required className="rounded-lg text-text text-lg font-bold bg-bright_accent mr-60 px-4 py-2"></input>
          <div className="flex justify-center">
          <input type="text" id="detail" placeholder="新しいタスクです" required className="rounded-lg text-sm bg-bright_accent px-24 py-10 mt-6"></input>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={createNewTask} className="bg-bright_accent hover:bg-accent text-text font-bold hover:text-inverted_text py-2 px-4 border border-bright_accent hover:border-transparent rounded">
              タスクを作成
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
          <div className="text-lg font-bold flex justify-center">ベンチ</div>
          <div className="text-sm">・ベンチ60kg10回</div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
          <div className="text-lg font-bold flex justify-center">ベンチ</div>
          <div className="text-sm">・ベンチ60kg10回</div>
        </div>



        <Link to="/addTraining">
          <div className="rounded-lg bg-bright_accent flex justify-center my-6 p-6">
            <div className="text-lg ">トレーニングを追加</div>
          </div >

        </Link>
      </div>

    </>
  );
}
