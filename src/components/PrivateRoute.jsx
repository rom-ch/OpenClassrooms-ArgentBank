import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

function PrivateRoute({ Component }) {
  const token = useSelector((state) => state.auth.token);

  return token ? <Component /> : <Navigate to="/sign-in" />;
}

PrivateRoute.propTypes = {
  Component: PropTypes.func,
};

export default PrivateRoute;
