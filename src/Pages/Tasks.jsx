import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="font-bold text-slate-900 text-2xl">最近のタスク</div>
      <div className="rounded-lg bg-rose-700 my-5 p-6 bg-gradient-to-r from-red-500 to-rose-200">
        <Link to="/doneTask">
          <div className="font-bold text-lg flex justify-center">おすすめのメニュー(1日)</div>
          <div className="py-3">
            <div className="text-sm">・ベンチ80kg10回</div>
            <div className="text-sm">・スクワット30回</div>
          </div>
        </Link>
      </div>

      <div className="rounded-lg bg-rose-500  my-5 p-6">
        <Link to="/doneTask">
          <div className="font-bold text-lg flex justify-center">おすすめのメニュー(1日)</div>
          <div className="py-3">
            <div className="text-sm">・ベンチ60kg10回</div>
            <div className="text-sm">・スクワット20回</div>
          </div>
        </Link>
      </div>

      <div className="font-bold text-slate-900 text-2xl">すべてのタスク</div>
      <div className="rounded-lg bg-rose-300 my-5 p-6">
        <Link to="/doneTask">
          <div className="font-bold text-lg flex justify-center">おすすめのメニュー(1日)</div>
          <div className="py-3">
            <div className="text-sm">・ベンチ40kg10回</div>
            <div className="text-sm">・スクワット10回</div>
          </div>
        </Link>
      </div>

      <div className="rounded-lg bg-rose-100  my-5 p-6">
        <Link to="/createTask">
          <div className="text-lg flex justify-center">タスクを追加</div>
        </Link>
      </div>

    </>
  );
}
