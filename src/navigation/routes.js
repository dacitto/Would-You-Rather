import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
export const ProtectedRoutes = [
  { id: 1354, path: "/", component: <Home /> },
  { id: 1564, path: "/about", component: <About /> },
  { id: 1648, path: "*", component: <NotFound /> },
];

export const routes = [{ id: 4521, path: "/Login", component: <Login /> }];
