import { useState, useEffect, useContext } from "react";
import { getTasks } from "../adapter";
import { TokenContext } from "./TokenContext";
import InfiniteScroll from "react-infinite-scroller";
import TaskCard from "./TaskCard";


export default function ({ originOrder }) {
  const token = useContext(TokenContext);
  const [tasks, setTasks] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [orderBy, setOrderBy] = useState(originOrder);

  const LIMIT_SIZE = 2;

  const loadNextHandle = async () => {
    if (token) {
      const current = await getTasks({
        token,
        offset: tasks.length,
        limit: LIMIT_SIZE,
        order_by: orderBy,
        descending: false,
      });
      setTasks(tasks.concat(current));
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

  useEffect(() => {
    setTasks([]);
    setHasNext(true);
    loadNextHandle();
  }, [token, orderBy]);

  return (
    <>
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

      <div className="h-[240px] overflow-scroll">
        <InfiniteScroll
          loadMore={loadNextHandle}
          hasMore={hasNext}
          initialLoad={false}
          useWindow={false}
          threshold={20}
        >
          {tasks.map((task, i) => (
            <div key={i}>
              <TaskCard task={task} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
