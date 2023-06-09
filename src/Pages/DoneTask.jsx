import { Link } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { getTaskInstance } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import DoneTaskCard from "../Components/DoneTaskCard";

export default function () {
  const token = useContext(TokenContext);
  const [doneTasks, setdoneTasks] = useState([]);

  const fn = async ()=>{
    const doneTasks = await getTaskInstance({
      token,
      offset: 0,
      limit: 20,
      order_by: "times",
      descending: true,
    });
    setdoneTasks(doneTasks);
  }

  useEffect(() => {
    fn();
  }, []);


  return (
    <div className="text-text">
        {doneTasks.length != 0 ? (
          <>
            <div className="text-2xl font-bold">実行中のメニュー</div>
            {doneTasks.map((task) => (
              <DoneTaskCard task={task} />
            ))}
          </>
        ) : undefined}
    </div>

  );
}
