import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="absolute inset-x-0 bottom-0 grid grid-cols-5 gap-5 mb-8 p-4 mx-4 bg-gradient-to-br from-bright_accent to-accent rounded-2xl">
      <Link to="/home">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <span className="material-icons" style={{ fontSize: "36px" }}>
            home
          </span>
        </div>
        <div className="flex justify-center text-sm text-white">
          ホーム
        </div>
      </Link>

      <Link to="/statistics">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span className="material-icons" style={{ fontSize: "36px" }}>
            leaderboard
          </span>
        </div>
        <div className="flex justify-center text-sm text-white">
          統計
        </div>
      </Link>

      <Link to="/tasks">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span className="material-icons" style={{ fontSize: "36px" }}>
            add_task
          </span>
        </div>
        <div className="flex justify-center text-sm text-white">
          タスク
        </div>
      </Link>

      <Link to="/appearance">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span className="material-icons" style={{ fontSize: "36px" }}>
            palette
          </span>
        </div>
        <div className="flex justify-center text-sm text-white">
          着せ替え
        </div>
      </Link>

      <Link to="/friends">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span className="material-icons" style={{ fontSize: "36px" }}>
            people
          </span>
        </div>
        <div className="flex justify-center text-sm text-white">
          友達
        </div>
      </Link>

    </div>
  );
}
