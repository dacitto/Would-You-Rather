import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import Home from "../pages/Home";
import About from "../pages/About";
import { handleInitialData } from "../actions/shared";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes, routes } from "../navigation/routes";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  let authedUser = localStorage.getItem("authedUser");
  return (
    <Routes>
      {!authedUser
        ? routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))
        : ProtectedRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                authedUser ? route.component : <Navigate to="/login" replace />
              }
            />
          ))}
    </Routes>
  );
};

export default App;
