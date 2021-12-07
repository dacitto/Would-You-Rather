import Home from "../pages/Home";
import Leaders from "../pages/Leaders";
import Login from "../pages/Login";
import Question from "../pages/Question";
import NotFound from "../pages/NotFound";
import NewQuestion from "../pages/NewQuestion";
import { Navigate } from "react-router-dom";
export const protectedRoutes = [
  { id: 1, path: "/", component: <Home /> },
  { id: 2, path: "/leaders", component: <Leaders /> },
  { id: 9, path: "/question/:id", component: <Question /> },
  { id: 9, path: "/newquestion", component: <NewQuestion /> },
  { id: 3, path: "*", component: <NotFound /> },
];

export const routes = [{ id: 1, path: "/Login", component: <Login /> }];
