import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { generateBackgroundColor, toastPosition } from "../utils/helpers";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

function Toast({
  position = "top-right",
  type,
  title,
  message,
  duration = 5000,
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const generateIcon = (type) => {
    switch (type) {
      case "success":
        return <FaCheck />;
      case "info":
        return <FaInfoCircle />;
      case "warning":
        return <FaExclamationTriangle />;
      case "error":
        return <FaExclamationCircle />;
      default:
        return;
    }
  };

  return (
    visible && (
      <div
        className={`pointer-events-auto absolute z-50 mb-4 flex w-80 cursor-pointer items-center overflow-hidden rounded-md py-4 pl-2.5 pr-4 text-white opacity-90 shadow transition-opacity duration-300 hover:opacity-100 ${toastPosition(position)} ${generateBackgroundColor(type)} `}
      >
        <IoCloseCircle className="absolute right-1 top-1 cursor-pointer text-2xl" />

        <div className="mr-4 text-3xl">{generateIcon(type)}</div>
        <div>
          <p className="mb-1.5 text-base font-bold tracking-wide">{title}</p>
          <p className="overflow-hidden text-ellipsis">{message}</p>
        </div>
      </div>
    )
  );
}

Toast.propTypes = {
  position: PropTypes.string,
  deleteInterval: PropTypes.number,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

export default Toast;
