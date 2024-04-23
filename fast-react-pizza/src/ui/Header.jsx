import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="px-3 py-4 uppercase bg-yellow-500 border-b border-stone-500 sm:px-6">
      <Link to="/" className="tracking-[0.3rem]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </div>
  );
}

export default Header;
