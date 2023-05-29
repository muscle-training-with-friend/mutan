import React from "react";
import { useStopwatch } from 'react-timer-hook';

export default function () {

  const { seconds, minutes, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
        <div className="font-bold text-xl flex justify-center">ベンチ</div>
        <div className="text-sm my-2">・ベンチ30kg10回</div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full h-80 w-80 bg-gradient-to-br from-bright_accent to-accent my-6 p-3">
          <div className="rounded-full h-full w-full bg-white">
            <div className="flex justify-center font-sm pt-16">timer is...</div>
            <div className="flex justify-center font-sm">{isRunning ? "running" : "not running"}</div>
            <div className="flex justify-center text-slate-900 text-5xl font-bold pt-10">
              {minutes}:{seconds}
            </div>
          </div>
        </div>
      </div>


      <div className="rounded-2xl py-5 my-10">
        <div className="grid grid-cols-3 gap-6 content-center">
          <div className="flex justify-center rounded-2xl bg-theme2 py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)]" onClick={start}>start</div>
          <div className="flex justify-center rounded-2xl bg-theme2 py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)]" onClick={pause}>stop</div>
          <div className="flex justify-center rounded-2xl bg-theme2 py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)]" onClick={reset}>finish</div>
        </div>
      </div>
      
    </>
  );
}
