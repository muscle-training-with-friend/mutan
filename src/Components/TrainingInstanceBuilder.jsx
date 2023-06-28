import { useState } from "react";
import TrainingsView from "./TrainingsView";

export default function ({ build }) {
  const [cursor, setCursor] = useState(undefined);

  return (
    <>
      <div className="font-bold">すべてのトレーニング</div>

      <TrainingsView onClickFactory={(training) => () => setCursor(training)} />

      {cursor ? (
        <>
          <div className="font-bold">選択中のトレーニング</div>
          <div className="mb-2">{cursor.name}</div>
          <div className="mb-2">{cursor.description}</div>
          <input
            type="number"
            value={cursor.weight}
            onChange={(e) =>
              setCursor((prev) => ({
                ...prev,
                weight: parseFloat(e.target.value),
              }))
            }
            className="mb-2 rounded bg-muted_bg p-2"
            laceholder="重量"
          />
          <input
            type="number"
            value={cursor.times}
            onChange={(e) =>
              setCursor((prev) => ({
                ...prev,
                times: parseFloat(e.target.value),
              }))
            }
            className="mb-2 rounded bg-muted_bg p-2"
            placeholder="回数"
          />
          <div onClick={(_) => build(cursor)}>
            <div className="rounded bg-muted_bg p-2">追加</div>
          </div>
        </>
      ) : undefined}
    </>
  );
}
