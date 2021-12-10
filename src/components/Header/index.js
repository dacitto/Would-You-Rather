import React, { useState, useEffect } from "react";
import MyLink from "./MyLink";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setAuthedUser } from "../../actions/authedUser";
import { BiCrown, BiQuestionMark, BiHome } from "react-icons/bi";

const Header = () => {
  const params = useLocation();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const userInfos = useSelector((state) => state.users[authedUser]);
  const pathname = params.pathname;
  const Navigate = useNavigate();

  const paths = ["/", "/leaderboard", "/add"];
  const [active, setActive] = useState(
    paths.includes(pathname.toLocaleLowerCase())
      ? pathname.toLocaleLowerCase()
      : ""
  );
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  const Links = [
    { path: "/", name: "Home", icon: <BiHome /> },
    { path: "/leaderboard", name: "Leaders", icon: <BiCrown /> },
    { path: "/add", name: "New Question", icon: <BiQuestionMark /> },
  ];
  return (
    <header className="w-full py-5 bg-indigo-800">
      <nav className="container px-6 mx-auto text-indigo-50 w-full flex justify-between text-lg">
        <span className="hidden md:block">
          <h1 className="font-wyr text-2xl">Would You Rather</h1>
        </span>
        <span className="flex gap-4">
          {Links.map((link) => (
            <MyLink
              key={link.name}
              path={link.path}
              name={link.name}
              icon={link.icon}
              setActive={setActive}
              active={active}
            />
          ))}
        </span>
        <span className="flex gap-2">
          <div>{userInfos ? userInfos.name.split(" ")[0] : ""}</div>
          <button
            onClick={() => {
              localStorage.clear();
              dispatch(setAuthedUser(null));
              Navigate("/login");
            }}
            className="px-2 rounded-md border font-semibold border-indigo-100 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300"
          >
            Logout
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
