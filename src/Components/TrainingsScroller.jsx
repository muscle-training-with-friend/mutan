import React, { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "./TokenContext";
import InfiniteScroll from "react-infinite-scroller";



export default function ({limit, def}) {
  const token = useContext(TokenContext);
  const [trainings, setTrainings] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [tag, setTag] = useState();
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const LIMIT_SIZE = limit;

  const initTrainings = () => {
    setTrainings([]);
    setOffset(0);
    setHasMore(true);
  };

  const fetchTrainings = async () => {
    if (token) {
      const trainings = await getTrainings({
        token,
        offset,
        limit: LIMIT_SIZE,
        order_by: orderBy,
        descending: false,
        tag,
      });

      setTrainings((prev) => [...prev, ...trainings]);
      setOffset((prev) => prev + LIMIT_SIZE);
      if (trainings.length < LIMIT_SIZE) {
        setHasMore(false);
      }
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [token, orderBy, tag]);

  const createOrderByHandle = (targetOrderBy) => () => {
    if (targetOrderBy != orderBy) {
      initTrainings();
      setOrderBy(targetOrderBy);
    }
  };

  const createTagHandle = (targetTag) => () => {
    if (targetTag != tag) {
      initTrainings();
      setTag(targetTag);
    }
  };
  console.log(hasMore)

  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>

      <button
        onClick={createOrderByHandle("name")}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        名前順
      </button>
      <button
        onClick={createOrderByHandle("times")}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        回数順
      </button>
      <button
        onClick={createOrderByHandle("latest")}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        最近
      </button>

      <div>
        <button onClick={createTagHandle("胸")}>胸トレ</button>
        <button onClick={createTagHandle("背中")}>背中トレ</button>
        <button onClick={createTagHandle("肩")}>肩トレ</button>
        <button onClick={createTagHandle("腕")}>腕トレ</button>
        <button onClick={createTagHandle("脚")}>脚トレ</button>
      </div>

      {tag != undefined ? (
        <>
          <div className="h-[500px] overflow-scroll">
            <InfiniteScroll
              loadMore={fetchTrainings}
              hasMore={hasMore}
              loader={<div>読み込み中</div>}
              threshold={20}
              initialLoad={false}
              useWindow={false}
            >

              {def(trainings)}
              
            </InfiniteScroll>
          </div>
        </>
      ) : undefined}
    </>
  );
}
