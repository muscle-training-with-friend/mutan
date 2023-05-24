import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="font-bold text-slate-600">タスク</div>
      <Link to="/doneTask">タスクを実行</Link>
      <Link to="/createTask">タスクを追加</Link>
    </>
  );
}
