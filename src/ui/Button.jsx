import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm";
  const style = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-1 text-xs md:px-5 md:py-2.5",
    secondary:
      "text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-200 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
    round: base + "px-2.5 py-1 text-xs md:px-3.5 md:py-2",
  };
  if (to) {
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} className={style[type]} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
