import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  generateBackgroundColor,
  toastAnimation,
  toastPosition,
} from "../helpers/toastHelpers";
import { deleteToast } from "../store/toastSlice";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

function Toast({ position = "top-right", deleteInterval }) {
  const toastList = useSelector((state) => state.toast.toast);
  const dispatch = useDispatch();

  const generateIcon = (type) => {
    switch (type) {
      case "SUCCESS":
        return <FaCheck />;
      case "INFO":
        return <FaInfoCircle />;
      case "WARNING":
        return <FaExclamationTriangle />;
      case "ERROR":
        return <FaExclamationCircle />;
      default:
        return;
    }
  };

  return (
    <div className={`fixed z-50 text-sm text-white ${toastPosition(position)}`}>
      {toastList.map((toast) => {
        if (deleteInterval) {
          setInterval(() => {
            dispatch(deleteToast(toast.id));
          }, deleteInterval);
        }
        return (
          <div
            onClick={() => dispatch(deleteToast(toast.id))}
            key={toast.id}
            className={`pointer-events-auto relative mb-4 flex w-80 cursor-pointer items-center overflow-hidden rounded-md py-4 pl-2.5 pr-4 opacity-90 shadow transition-opacity duration-300 hover:opacity-100 ${generateBackgroundColor(toast.type)} ${toastAnimation(position)}`}
          >
            <IoCloseCircle className="absolute right-1 top-1 cursor-pointer text-2xl" />

            <div className="mr-4 text-3xl">{generateIcon(toast.type)}</div>
            <div>
              <p className="mb-1.5 text-base font-bold">{toast.title}</p>
              <p className="overflow-hidden text-ellipsis">{toast.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Toast.propTypes = {
  position: PropTypes.string,
  deleteInterval: PropTypes.number,
};

export default Toast;
