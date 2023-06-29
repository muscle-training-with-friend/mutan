import { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "./TokenContext";
import InfiniteScroll from "react-infinite-scroller";
import TrainingCard from "./TrainingCard";
import { getTraining } from "../adapter";

const LIMIT_SIZE = 8;

export default function ({ onClickFactory }) {
  const token = useContext(TokenContext);

  const [trainings, setTrainings] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [orderBy, setOrderBy] = useState("name");
  const [tag, setTag] = useState();
  const [visiable, setVisiable] = useState(false);
  const [orderElement, setOrderElement] = useState(["name", "times", "latest"])
  const [tagsElement, setTagsElement] = useState(["胸", "背中", "肩", "腕", "脚"])
  const [form, setForm] = useState("ベンチプレス");

  const loadNextHandle = async () => {
    if (token) {
      const current = await getTrainings({
        token,
        offset: trainings.length,
        limit: LIMIT_SIZE,
        order_by: orderBy,
        descending: false,
        tag,
        search: form
      });
      setTrainings(trainings.concat(current));
      if (current.length < LIMIT_SIZE) {
        setHasNext(false);
      }
    }
  };

  const setOrderByHandleFactory = (targetOrderBy) => () => {
    if (targetOrderBy != orderBy) {
      setTrainings([]);
      setHasNext(true);
      setOrderBy(targetOrderBy);
    }
  };

  const setTagHandleFactory = (targetTag) => () => {
    if (targetTag != tag) {
      setTrainings([]);
      setHasNext(true);
      setTag(targetTag);
    }
  };

  useEffect(() => {
    loadNextHandle();
  }, [token, orderBy, tag, form]);

  const displayOrder = (order) => {
    let textOrder = "名前順"
    if (order == "name") { textOrder = "名前順" }
    if (order == "times") { textOrder = "回数順" }
    if (order == "latest") { textOrder = "最近" }

    return (
      <div>
        <button onClick={setOrderByHandleFactory(order)} className="rounded-2xl p-3 mx-3 text-text bg-gradient-to-br from-bright_accent to-accent">
          {textOrder}
        </button>
      </div>
    );
  }

  const displayTags = (tag) => {
    let textOrder = "名前順"
    if (tag == "胸") { textOrder = "胸トレ" }
    if (tag == "背中") { textOrder = "背中トレ" }
    if (tag == "肩") { textOrder = "肩トレ" }
    if (tag == "腕") { textOrder = "腕トレ" }
    if (tag == "脚") { textOrder = "脚トレ" }

    return (
      <div>
        <button onClick={setTagHandleFactory(tag)} className="rounded-2xl p-3 mx- text-text bg-gradient-to-br from-bright_accent to-accent">
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
        <div className="font-bold text-text mr-20 mx-6 mt-2">すべてのトレーニング</div>
        <div className="mt-1">
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
            <div className="flex">
              {tagsElement.map((order) => (
                displayTags(order)
              ))}
            </div>

            <input
            type="text"
            value={form}
            onChange={(e) => setForm(e.target.value)}
            className="w-full rounded-2xl bg-bright_accent p-2"
            placeholder="training name"
          />
          </>
        ) : undefined}
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
