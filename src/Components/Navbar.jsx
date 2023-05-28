import { Link } from "react-router-dom";

export default function () {
  return (
      <div className="absolute grid grid-cols-5 gap-3 py-6 px-6 bottom-0 bg-gradient-to-r from-theme_color1 to-theme_color4 rounded-t-2xl">
        <Link to="/home"><div className="flex justify-center mx-1 text-sm">ホーム</div></Link>
        <Link to="/statistics"><div className="flex justify-center mx-1 text-sm">統計</div></Link>
        <Link to="/tasks"><div className="flex justify-center mx-1 text-sm">タスク</div></Link>
        <Link to="/appearance"><div className="flex justify-center mx-1 text-sm">着せ替え</div></Link>
        <Link to="/friends"><div className="flex justify-center mx-1 text-sm">友達</div></Link>
      </div>
  );
}
