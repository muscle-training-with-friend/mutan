import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-theme_color1 to-theme_color4 mb-6 p-6">
        <div className="rounded-lg text-lg font-bold bg-white/30 mr-60 px-4 py-2">新規タスク</div>
        <div className="rounded-lg text-sm bg-white/30 px-4 py-10 mt-6">
          <div>
            新しいタスクです。
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-theme_color1 to-theme_color4 my-6 p-6">
        <div className="text-lg font-bold flex justify-center">ベンチ</div>
        <div className="text-sm">・ベンチ60kg10回</div>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-theme_color1 to-theme_color4 my-6 p-6">
        <div className="text-lg font-bold flex justify-center">ベンチ</div>
        <div className="text-sm">・ベンチ60kg10回</div>
      </div>


      <Link to="/addTraining">
        <div className="rounded-lg bg-theme_color2 flex justify-center my-6 p-6">
          <div className="text-lg ">トレーニングを追加</div>
        </div >

      </Link>

    </>
  );
}
