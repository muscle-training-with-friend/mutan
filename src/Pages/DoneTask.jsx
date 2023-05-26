import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="font-bold text-slate-600">タスクの実行</div>
      <Link to="/timer">トレーニングを開始</Link>
      <div className="font-bold text-slate-600 text-3xl">タスクの実行</div>
      <div className="text-3xl">おすすめのメニュー(1日)</div>{/*メニュー名*/}
      <div className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-t from-slate-600 via-purple-600 to-slate-900 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-br from-yellow-200 via-red-500 to-fuchsia-500 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-lg bg-gradient-to-tl from-lime-600 via-yellow-300 to-red-600 h-40 m-5">
        <div className="text-2xl p-5 text-white">ベンチ</div></div>
      <div className="rounded-full bg-cyan-500 h-20 text-center pt-6 hover:bg-sky-700">
        <Link to="/timer" className="text-white">トレーニングを開始</Link></div>
      <Link to="/timer">トレーニングを開始</Link>
    </>
  );
}
