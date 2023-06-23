import { useContext, useEffect, useState } from "react";
import TrainingsScroller from "./TrainingsScroller";

export default function ({ build }) {
  const [cursor, setCursor] = useState(undefined);

  const LIMIT_SIZE = 8;

  const createDef = (trainings) => {
    return(
      trainings.map((training) => (
        <div
          onClick={(_) => setCursor(training)}
          className="mb-3 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-3"
        >
          <div>{training.name}</div>
          <div>重量(デフォルト): {training.weight}</div>
          <div>回数(デフォルト): {training.times}</div>
        </div>
      ))
    );
  }

  return (
    <>
      <div className="font-bold">すべてのトレーニング</div>
      
      <TrainingsScroller limit={LIMIT_SIZE} def={createDef}/>

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
