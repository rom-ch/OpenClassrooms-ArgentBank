import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  const base = "bg-accentGreen text-white font-bold leading-6";

  const styles = {
    primary: base + " w-full p-2 text-lg md:w-[200px]",
    small: base + " text-sm p-2.5",
    large: base + " block w-full p-2 text-center text-lg underline",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return <button className={styles[type]}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
