import { useEffect, useState } from "react";
import { getTrainings } from "../adapter"

export default function () {
  const [trainings, setTrainings] = useState([]);
  const [selects, setSelects] = useState([])

  const fn = async () => {
    const res = await getTrainings({ offset: 0, size: 20 });
    setTrainings(res);
  };

  useEffect(() => { fn(); }, []);

  const onClick = () => {
    
  }

  return (
    <>

      <div className="font-bold text-slate-600">トレーニングの一覧</div>

      {trainings.map(training =>
        <button onClick={onClick} className="w-full h-auto my-6">
          <div className="rounded-2xl bg-gradient-to-br from-bright_accent to-accent">
            <div>{training.name}</div>
            <div>重量:{training.default_weight_value}</div>
            <div>回数:{training.default_count_value}</div>
          </div>
        </button >
      )}
    </>
  );
}

export function SelectTraining(){
  res = selects;
  return(res);
}
