import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { handleInitialData } from "./actions/shared";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { protectedRoutes } from "./navigation/routes";
import PrivateRoute from "./navigation/PrivateRoute";
import Login from "./pages/Login";
const App = () => {
  const lastPathLocation = useLocation().pathname;
  const [lastPath, setLastPath] = useState(useLocation().pathname);
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  useEffect(() => {
    setLastPath(lastPathLocation);
    dispatch(handleInitialData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, authedUser]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !authedUser ? (
            <Login lastPath={lastPath} />
          ) : (
            <Navigate
              to={
                lastPath.toLowerCase() === "/login"
                  ? "/"
                  : lastPath.toLowerCase()
              }
              replace
            />
          )
        }
      />
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
