import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
function RouteLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RouteLayout;
