import React from "react";
import { useStopwatch } from 'react-timer-hook';

export default function () {

  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  return (
    <>
      <div className="font-bold text-slate-600">タイマー</div>
      <div className="rounded-lg bg-gradient-to-l from-rose-200 to-rose-600 my-6 p-6">
        <div className="font-bold text-xl flex justify-center">ベンチ</div>
        <div className="text-sm my-2">・ベンチ30kg10回</div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full h-80 w-80 bg-gradient-to-l from-rose-200 to-rose-600 my-6 p-3">
          <div className="rounded-full h-full w-full bg-white">
            <div className="flex justify-center font-sm pt-16">timer is...</div>
            <div className="flex justify-center font-sm">{isRunning ? "Running" : "Not Running"}</div>
            <div className="flex justify-center text-slate-900 text-5xl font-bold pt-10">
              {hours}:{minutes}:{seconds}
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-3 gap-8 content-center mt-5 my-16">
        <div className="flex justify-center rounded-lg bg-gradient-to-l from-rose-200 to-rose-600 py-3" onClick={start}>start</div>
        <div className="flex justify-center rounded-lg bg-gradient-to-l from-rose-200 to-rose-600 py-3" onClick={pause}>stop</div>
        <div className="flex justify-center rounded-lg bg-gradient-to-l from-rose-200 to-rose-600 py-3" onClick={reset}>finish</div>
      </div>
    </>
  );
}
