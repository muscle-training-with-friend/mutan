import { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "./TokenContext";
import InfiniteScroll from "react-infinite-scroller";
import TrainingCard from "./TrainingCard";

const LIMIT_SIZE = 8;

export default function ({ onClickFactory }) {
  const token = useContext(TokenContext);

  const [trainings, setTrainings] = useState([]);
  const [hasNext, setHasNext] = useState(true);

  const [orderBy, setOrderBy] = useState("name");
  const [tag, setTag] = useState();

  const loadNextHandle = async () => {
    if (token) {
      const current = await getTrainings({
        token,
        offset: trainings.length,
        limit: LIMIT_SIZE,
        order_by: orderBy,
        descending: false,
        tag,
      });
      setTrainings(trainings.concat(current));
      if (current.length < LIMIT_SIZE) {
        setHasNext(false);
      }
    }
  };

  const setOrderByHandleFactory = (targetOrderBy) => () => {
    if (targetOrderBy != orderBy) {
      setOrderBy(targetOrderBy);
    }
  };

  const setTagHandleFactory = (targetTag) => () => {
    if (targetTag != tag) {
      setTag(targetTag);
    }
  };

  useEffect(() => {
    setTrainings([]);
    setHasNext(true);
    loadNextHandle();
  }, [token, orderBy, tag]);

  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>

      <button
        onClick={setOrderByHandleFactory("name")}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        名前順
      </button>
      <button
        onClick={setOrderByHandleFactory("times")}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        回数順
      </button>
      <button
        onClick={setOrderByHandleFactory("latest")}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        最近
      </button>

      <div>
        <button onClick={setTagHandleFactory("胸")}>胸トレ</button>
        <button onClick={setTagHandleFactory("背中")}>背中トレ</button>
        <button onClick={setTagHandleFactory("肩")}>肩トレ</button>
        <button onClick={setTagHandleFactory("腕")}>腕トレ</button>
        <button onClick={setTagHandleFactory("脚")}>脚トレ</button>
      </div>

      <div className="h-[500px] overflow-scroll">
        <InfiniteScroll
          loadMore={loadNextHandle}
          hasMore={hasNext}
          initialLoad={false}
          useWindow={false}
          threshold={20}
        >
          {trainings.map((training, i) => (
            <div key={i} onClick={onClickFactory(training)}>
              <TrainingCard training={training} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
