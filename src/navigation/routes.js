import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";
export const protectedRoutes = [
  { id: 2, path: "/about", component: <About /> },
  { id: 1, path: "/", component: <Home /> },
  { id: 3, path: "*", component: <Navigate to="/" replace /> },
];

export const routes = [{ id: 1, path: "/Login", component: <Login /> }];
