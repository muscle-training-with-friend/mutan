import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="text-text">
        <div className="font-bold text-2xl">最近のタスク</div>
        <div className="rounded-3xl my-5 p-6 bg-gradient-to-br from-bright_accent to-accent">
          <Link to="/doneTask">
            <div className="font-bold text-lg flex justify-center">おすすめのメニュー(1日)</div>
            <div className="py-3">
              <div className="text-sm">・ベンチ80kg10回</div>
              <div className="text-sm">・スクワット30回</div>
            </div>
          </Link>
        </div>

        <div className="rounded-3xl my-5 p-6 bg-gradient-to-br from-bright_accent to-accent">
          <Link to="/doneTask">
            <div className="font-bold text-lg flex justify-center">おすすめのメニュー(1日)</div>
            <div className="py-3">
              <div className="text-sm">・ベンチ60kg10回</div>
              <div className="text-sm">・スクワット20回</div>
            </div>
          </Link>
        </div>

        <div className="font-bold text-slate-900 text-2xl">すべてのタスク</div>
        <div className="rounded-3xl my-5 p-6 bg-gradient-to-br from-bright_accent to-accent">
          <Link to="/doneTask">
            <div className="font-bold text-lg flex justify-center">おすすめのメニュー(1日)</div>
            <div className="py-3">
              <div className="text-sm">・ベンチ40kg10回</div>
              <div className="text-sm">・スクワット10回</div>
            </div>
          </Link>
        </div>

        <div className="rounded-3xl bg-bright_accent my-5 p-6">
          <Link to="/createTask">
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-lg ml-1">タスクを追加する</div>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
}
