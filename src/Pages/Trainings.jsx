import React, { useState, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingCard from "../Components/TrainingCard";
import InfiniteScroll from "react-infinite-scroller";

const LIMIT_SIZE = 8;

export default function () {
  const token = useContext(TokenContext);
  const [trainings, setTrainings] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [orderBy, setOrderBy] = useState("name");
  const [tag, setTag] = useState("胸");

  const clearTrainings = () => {
    setTrainings([]);
    setHasMore(true);
  };

  const fetchTrainings = async () => {
    if (token) {
      const appends = await getTrainings({
        token,
        offset: trainings.length,
        limit: LIMIT_SIZE,
        order_by: orderBy,
        descending: false,
        tag,
      });

      setTrainings((prev) => [...prev, ...appends]);
      if (appends.length < LIMIT_SIZE) {
        setHasMore(false);
      }
    }
  };

  const setOrderByHandleFactory = (targetOrderBy) => () => {
    if (targetOrderBy != orderBy) {
      setOrderBy(targetOrderBy);
      clearTrainings();
    }
  };

  const setTagHandleFactory = (targetTag) => () => {
    if (targetTag != tag) {
      setTag(targetTag);
      clearTrainings();
    }
  };

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

      <div className="h-[600px] overflow-scroll">
        <InfiniteScroll
          loadMore={fetchTrainings}
          hasMore={hasMore}
          useWindow={false}
        >
          {trainings.map((training) => (
            <TrainingCard training={training} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
