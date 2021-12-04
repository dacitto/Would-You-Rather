import Home from "../pages/Home";
import Leaders from "../pages/Leaders";
import Login from "../pages/Login";
import Question from "../pages/Question";
import { Navigate } from "react-router-dom";
export const protectedRoutes = [
  { id: 1, path: "/", component: <Home /> },
  { id: 2, path: "/leaders", component: <Leaders /> },
  { id: 9, path: "/question/:id", component: <Question /> },
  { id: 3, path: "*", component: <Navigate to="/" replace /> },
];

export const routes = [{ id: 1, path: "/Login", component: <Login /> }];
