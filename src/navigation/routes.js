import Home from "../pages/Home";
import Leaders from "../pages/Leaders";
import Login from "../pages/Login";
import Question from "../pages/Question";
import NotFound from "../pages/NotFound";
import NewQuestion from "../pages/NewQuestion";
export const protectedRoutes = [
  { id: 1, path: "/", component: <Home /> },
  { id: 2, path: "/leaderboard", component: <Leaders /> },
  { id: 9, path: "/questions/:id", component: <Question /> },
  { id: 9, path: "/add", component: <NewQuestion /> },
  { id: 3, path: "*", component: <NotFound /> },
];

export const routes = [{ id: 1, path: "/Login", component: <Login /> }];
