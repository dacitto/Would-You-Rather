import React, { useState } from "react";
import MyLink from "./MyLink";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const userInfos = useSelector((state) => state.users[authedUser]);
  const Navigate = useNavigate();
  console.log("authedUser");
  console.log(userInfos);
  const [active, setActive] = useState("/");
  const Links = [
    { path: "/", name: "Home" },
    { path: "/leaders", name: "Leaders" },
    { path: "/newquestion", name: "New Question" },
  ];
  return (
    <header className="w-full py-5 bg-indigo-800">
      <nav className="container px-6 mx-auto text-indigo-50 w-full flex justify-between text-lg">
        <span className="flex gap-4">
          {Links.map((link) => (
            <MyLink
              key={link.name}
              path={link.path}
              name={link.name}
              setActive={setActive}
              active={active}
            />
          ))}
        </span>
        <span className="flex gap-2">
          <div>{userInfos.name.split(" ")[0]}</div>
          <button
            onClick={() => {
              localStorage.clear();
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
