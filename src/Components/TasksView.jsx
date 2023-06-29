import { useState, useEffect, useContext } from "react";
import { getTasks } from "../adapter";
import { TokenContext } from "./TokenContext";
import InfiniteScroll from "react-infinite-scroller";
import TaskCard from "./TaskCard";

const LIMIT_SIZE = 8;

export default function ({ onClickFactory }) {
  const token = useContext(TokenContext);

  const [tasks, setTasks] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [orderBy, setOrderBy] = useState("name");
  const [visiable, setVisiable] = useState(false);
  const [orderElement, setOrderElement] = useState(["name", "times", "latest"])

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
      setTasks([]);
      setHasNext(true);
    }
  };

  useEffect(() => {
    loadNextHandle();
  }, [token, orderBy]);

  const displayOrder = (order) => {
    let textOrder = "名前順"
    if (order == "name") { textOrder = "名前順" }
    if (order == "times") { textOrder = "回数順" }
    if (order == "latest") { textOrder = "最近" }

    return (
      <div>
        <button onClick={setOrderByHandleFactory(order)} className="rounded-2xl my-1 mx-4 px-6 py-3 text-text bg-gradient-to-br from-bright_accent to-accent">
          {textOrder}
        </button>
      </div>
    );
  }

  const buildDropDown = () => {
    setVisiable(!visiable);
  }

  return (
    <>
      <div className="flex">
        <div className="text-4xl font-bold mr-44 mx-6 mb-2">all tasks</div>
        <div className="mt-2">
          <button onClick={() => buildDropDown()}>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <span class="material-icons" style={{ fontSize: "32px" }}>
              settings
            </span>
          </button>
        </div>
      </div>
      <div className="text-text">
        {visiable ? (
          <>
            <div className="flex">
              {orderElement.map((order) => (
                displayOrder(order)
              ))}
            </div>
          </>
        ) : undefined}
      </div>

      <div className="my-4 h-[450px] overflow-scroll">
        <InfiniteScroll
          loadMore={loadNextHandle}
          hasMore={hasNext}
          initialLoad={false}
          useWindow={false}
          threshold={20}
        >
          {tasks.map((task, i) => (
            <div key={i} onClick={onClickFactory(task)}>
              <TaskCard task={task} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
