import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import Home from "../pages/Home";
import About from "../pages/About";
import { handleInitialData } from "../actions/shared";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  let authedUser = localStorage.getItem("authedUser");
  return (
    <Routes>
      {!authedUser && <Route path="/login" element={<Login />} />}
      <Route
        path="/"
        element={authedUser ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/about"
        element={authedUser ? <About /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default App;
