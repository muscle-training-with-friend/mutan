import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="font-bold text-slate-600">統計</div>
      <div>統計だだ！</div>
      <Link to="/allTrainings">トレーニング</Link>
    </>
  );
}
