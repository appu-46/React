import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm font-semibold uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-2.5 sm:px-6 sm:py-3.5",
    small: base + " py-2 px-5 md:px-5 md:py-2.5 sm:px-6 sm:py-5 text-xs",
    secondary:
      "px-4 py-2.5 text-sm sm:px-6 sm:py-2.5 inline-block font-semibold uppercase transition-colors duration-300 border-2 border-stone-300 rounded-full text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <>
        <Link to={to} className={styles[type]}>
          {children}
        </Link>
      </>
    );
  return (
    <div>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </div>
  );
}

export default Button;
