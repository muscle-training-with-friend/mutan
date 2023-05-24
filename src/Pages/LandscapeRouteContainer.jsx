import { Outlet } from "react-router-dom";
import LandscapeContainer from "../Components/LandscapeContainer";

export default function () {
  return (
    <LandscapeContainer>
      <Outlet />
    </LandscapeContainer>
  );
}
