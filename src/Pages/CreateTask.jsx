import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="font-bold text-slate-600">タスクの実行</div>
      <Link to="/addTraining">トレーニングを追加</Link>
    </>
  );
}
