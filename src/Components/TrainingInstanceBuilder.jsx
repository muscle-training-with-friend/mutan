import { useState } from "react";
import TrainingsView from "./TrainingsView";

export default function ({ onBuild }) {
  const [cursor, setCursor] = useState(undefined);

  const setCursorWithWeight = (weight) => {
    setCursor((prev) => ({ ...prev, weight }));
  };

  const setCursorWithTimes = (times) => {
    setCursor((prev) => ({ ...prev, times }));
  };

  return (
    <>

      <TrainingsView onClickFactory={(training) => () => setCursor(training)} />

      {cursor ? (
        <>
          <div className="font-bold">選択中のトレーニング</div>
          <div className="mb-2">{cursor.name}</div>
          <div className="mb-2">{cursor.description}</div>
          <input
            type="number"
            value={cursor.weight}
            onChange={(e) => setCursorWithWeight(parseFloat(e.target.value))}
            className="mb-2 rounded bg-muted_bg p-2"
            laceholder="重量"
          />
          <input
            type="number"
            value={cursor.times}
            onChange={(e) => setCursorWithTimes(parseInt(e.target.value))}
            className="mb-2 rounded bg-muted_bg p-2"
            placeholder="回数"
          />
          <div onClick={() => onBuild(cursor)}>
            <div className="rounded bg-muted_bg p-2">追加</div>
          </div>
        </>
      ) : undefined}
    </>
  );
}
