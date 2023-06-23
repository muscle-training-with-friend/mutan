import React, { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingCard from "../Components/TrainingCard";
import InfiniteScroll from "react-infinite-scroller";

export default function () {
  const token = useContext(TokenContext);
  const [trainings, setTrainings] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [part, setPart] = useState("胸")
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)

  const fetchTrainings = async () => {
    if (token) {
      const trainings = await getTrainings({
        token,
        offset: offset,
        limit: 8,
        order_by: orderBy,
        descending: false,
        tag: part,
      });

      if (trainings.length < 1) {
        setHasMore(false);
        return;
      }

      setTrainings((prev) => [...prev, ...trainings]);
      setOffset((prev) => prev + 8);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [token, orderBy, part]);

  const setOrderByName = () => {
    setTrainings((prev) => []);
    setOffset((prev) => 0);
    setOrderBy("name");
  };

  const setOrderByTimes = () => {
    setTrainings((prev) => []);
    setOffset((prev) => 0);
    setOrderBy("times");
  };

  const setOrderByLatest = () => {
    setTrainings((prev) => []);
    setOffset((prev) => 0);
    setOrderBy("latest");
  };

  const filter_train = (part) => {
    setTrainings((prev) => []);
    setOffset((prev) => 0);
    setPart(part);
  }


  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>
      <button
        onClick={setOrderByName}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        名前順
      </button>
      <button
        onClick={setOrderByTimes}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        回数順
      </button>
      <button
        onClick={setOrderByLatest}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        最近
      </button>

      <div>
        <button onClick={() => filter_train("胸")}>胸トレ</button>
        <button onClick={() => filter_train("背中")}>背中トレ</button>
        <button onClick={() => filter_train("肩")}>肩トレ</button>
        <button onClick={() => filter_train("腕")}>腕トレ</button>
        <button onClick={() => filter_train("脚")}>脚トレ</button>
      </div>

      <div style={{ height: "600px", overflow: "scroll" }}>
        <InfiniteScroll
          loadMore={() => fetchTrainings()}
          hasMore={hasMore}
          loader={<div className="loader" key={0}>読み込んでるよん...</div>}
          threshold={0}
          initialLoad={false}
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
