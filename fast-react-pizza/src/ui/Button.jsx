import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "px-4 py-3 font-semibold uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  if (to)
    return (
      <>
        <Link to={to} className={className}>
          {children}
        </Link>
      </>
    );
  return (
    <div>
      <button disabled={disabled} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Button;