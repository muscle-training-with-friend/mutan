import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="bg-slate-100">
      <Link to="/home">ホーム</Link>
      <Link to="/statistics">統計</Link>
      <Link to="/tasks">タスク</Link>
      <Link to="/appearance">着せ替え</Link>
      <Link to="/friends">友達</Link>
    </div>
  );
}
