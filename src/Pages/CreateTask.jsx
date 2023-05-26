import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-br from-rose-200 to-rose-600 my-6 p-6">
        <div className="rounded-lg text-lg font-bold bg-white/30 mr-60 px-4 py-2">新規タスク</div>
        <div className="rounded-lg text-sm bg-white/30 px-4 py-10 mt-6">
          <div>
            <label for="createTrain" class="block mb-2 text-sm text-slate-600">タスクの入力</label>
            <input type="text" id="createTrain" class="bg-slate-100 border border-slate-400 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-br from-rose-200 to-rose-600 my-6 p-6">
        <div className="text-lg font-bold flex justify-center">ベンチ</div>
        <div className="text-sm">・ベンチ60kg10回</div>
      </div>

      <div className="rounded-lg bg-gradient-to-br from-rose-200 to-rose-600 my-6 p-6">
        <div className="text-lg font-bold flex justify-center">ベンチ</div>
        <div className="text-sm">・ベンチ60kg10回</div>
      </div>

      <div className="rounded-lg bg-rose-200 flex justify-center my-6 p-6">
        <Link to="/addTraining">
          <div className="text-lg ">トレーニングを追加</div>
        </Link>
      </div>
    </>
  );
}
