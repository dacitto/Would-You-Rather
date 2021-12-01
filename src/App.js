import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { handleInitialData } from "./actions/shared";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes, protectedRoutes } from "./navigation/routes";
import PrivateRoute from "./navigation/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  let authedUser = localStorage.getItem("authedUser");
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={!authedUser ? route.component : <Navigate to="/" replace />}
        />
      ))}
      :
      <>
        {protectedRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <PrivateRoute>
                <Header />
                {route.component}
              </PrivateRoute>
            }
          />
        ))}
      </>
    </Routes>
  );
};

export default App;
