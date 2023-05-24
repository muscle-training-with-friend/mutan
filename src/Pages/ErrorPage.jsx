import { useRouteError } from "react-router-dom";
import LandscapeContainer from "../Components/LandscapeContainer";

export default function () {
  const error = useRouteError();

  return (
    <LandscapeContainer>
      <div>エラーが発生しました</div>
      <div>{error.statusText || error.message}</div>
    </LandscapeContainer>
  );
}
