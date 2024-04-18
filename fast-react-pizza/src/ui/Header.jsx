import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/"> Fast React Pizza Co.</Link>
      <SearchOrder />

      <p>Pija</p>
    </div>
  );
}

export default Header;
