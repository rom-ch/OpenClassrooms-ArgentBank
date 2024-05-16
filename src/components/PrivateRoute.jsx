import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";

function PrivateRoute({ Component }) {
  const dispatch = useDispatch();

  const isAuthenticated =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));

  if (isAuthenticated) dispatch(setToken(isAuthenticated));

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  Component: PropTypes.func,
};

export default PrivateRoute;
