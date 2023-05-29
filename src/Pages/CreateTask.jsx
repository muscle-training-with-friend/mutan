import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="text-text">
        <div className="rounded-lg bg-gradient-to-br from-bright_accent to-accent mb-6 p-6">
          <div className="rounded-lg text-lg font-bold bg-bright_accent mr-60 px-4 py-2">新規タスク</div>
          <div className="rounded-lg text-sm bg-bright_accent px-4 py-10 mt-6">
            <div>
              新しいタスクです。
            </div>
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
