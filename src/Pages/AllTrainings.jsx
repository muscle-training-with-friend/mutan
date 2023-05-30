import React,{useState,useEffect} from "react";
import { getTrainings } from "../adapter";

export default function () {
  const [trainings, setTrainings] = useState([]);

  const fn = async () => {
      const res = await getTrainings({ offset: 0, size: 20 });
      setTrainings(res);
  };

  useEffect(() => { fn(); }, []);

  return (
    <>
     
      
      <div className="font-bold text-slate-600">トレーニングの一覧</div>
      
      {trainings.map(training => <div>{training.name}</div>)}
<div className="text-xl">胸のトレーニング</div>
<div className="rounded-sm bg-red-100 my-5 p-6 ">
<div className="flex justify-center"> 
<div className="text-2xl bg-red-100 inline-flex rounded-md ">ベンチプレス</div>
</div>
</div>
<div className="text-xl">脚のトレーニング</div>
<div className="flex justify-center"> 
<div className="text-2xl bg-9 inline-flex rounded ">スクワット</div>
      </div>

      <div className="text-xl">背中のトレーニング</div>
      <div className="flex justify-center"> 
      <div className="text-2xl bg-red-100 inline-flex rounded ">チンニング</div>
      </div>
      <div className="text-xl">腕のトレーニング</div>
      <div className="flex justify-center"> 
      <div className="text-2xl bg-red-100 inline-flex rounded ">アームカール</div>
      </div>
      <div className="text-xl">腹筋のトレーニング</div>
      <div className="flex justify-center"> 
      <div className="text-2xl bg-red-100 inline-flex rounded ">アクトレの腹筋プログラム</div>
      </div>
      
  
    </>
  );
}
