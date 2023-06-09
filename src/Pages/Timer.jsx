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

      <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent my-6 p-6">
        <div className="font-bold text-xl flex justify-center">ベンチ</div>
        <div className="text-sm my-2">・ベンチ30kg10回</div>
      </div>

      <div className="flex justify-center font-sm pt-16 text-muted_text">timer is...
        <div className="flex justify-center font-sm">{isRunning ? "running" : "not running"}</div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-full h-80 w-80 bg-gradient-to-br from-bright_accent to-accent my-6 p-3">
          <div className="rounded-full h-full w-full bg-white">
            <div className="flex justify-center text-slate-900 text-7xl font-bold pt-24">
              {minutes >= 10 ? minutes: ("0"+minutes)}:{seconds >= 10 ? seconds:("0"+seconds)}
            </div>
          </div>
        </div>
      </div>


      <div className="rounded-2xl py-5 my-10">
        <div className="grid grid-cols-3 gap-6 content-center">
          <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]" onClick={start}>start</div>
          <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]" onClick={pause}>stop</div>
          <div className="flex justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 z-10 mx-2 shadow-[0_0_64px_0_rgba(0.8,0.9,0.9,0.5)] shadow-[#FF7152]" onClick={reset}>finish</div>
        </div>
      </div>

    </>
  );
}
