import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  let authedUser = localStorage.getItem("authedUser");

  return authedUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
