import { useContext, useEffect, useState } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "./TokenContext";

export default function ({ build }) {
  const token = useContext(TokenContext);
  const [trainings, setTrainings] = useState([]);
  const [cursor, setCursor] = useState(undefined);

  const fn = async () => {
    const trainings = await getTrainings({
      token,
      offset: 0,
      limit: 20,
      order_by: "name",
      descending: true,
    });
    setTrainings(trainings);
  };
  useEffect(() => {
    fn();
  }, []);

  return (
    <>
      <div className="font-bold">すべてのトレーニング</div>
      {trainings.map((training) => (
        <div
          onClick={(_) => setCursor(training)}
          className="mb-3 rounded-2xl bg-gradient-to-br from-bright_accent to-accent p-3"
        >
          <div>{training.name}</div>
          <div>重量(デフォルト): {training.weight}</div>
          <div>回数(デフォルト): {training.times}</div>
        </div>
      ))}

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
