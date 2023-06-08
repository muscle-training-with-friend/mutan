import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="font-bold text-slate-600">Mutan</div>
      <div className="text-slate-600">筋トレのスケジューリングと記録アプリ</div>
      <Link to="/home">始める</Link>
    </>
  );
}
