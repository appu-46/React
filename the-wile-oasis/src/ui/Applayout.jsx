import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div>
      <p>App layout</p>
      <Outlet />
    </div>
  );
}

export default Applayout;
