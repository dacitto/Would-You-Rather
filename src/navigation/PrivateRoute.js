import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children }) => {
  //  let authedUser = localStorage.getItem("authedUser");
  const authedUser = useSelector((state) => state.authedUser);

  return authedUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
