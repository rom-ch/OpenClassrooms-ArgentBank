import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, type, to, disabled, onClick }) {
  const base =
    "bg-accentGreen text-white font-bold leading-6 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " w-full p-2 text-lg md:w-[200px]",
    small: base + " text-sm p-2.5",
    large: base + " block w-full p-2 text-center text-lg underline",
    update: base + " text-sm p-2 w-24 sm:w-32 rounded-sm",
    secondary:
      "text-sm p-2 w-24 sm:w-32 border border-accentGreen text-accentGreen rounded-sm font-bold leading-6",
  };

  if (to) {
    return (
      <Link
        onClick={onclick}
        disabled={disabled}
        to={to}
        className={styles[type]}
      >
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
