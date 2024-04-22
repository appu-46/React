import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="uppercase bg-yellow-500">
      <Link to="/" className="tracking-[0.3rem]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <p>Pija</p>
    </div>
  );
}

export default Header;
