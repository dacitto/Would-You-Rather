import React, { useState } from "react";
import MyLink from "./MyLink";
const Header = () => {
  const [active, setActive] = useState("/");
  const Links = [
    { path: "/", name: "Home" },
    { path: "/leaders", name: "Leaders" },
    { path: "/newquestion", name: "New Question" },
  ];
  return (
    <header className="w-full py-5 bg-indigo-800">
      <nav className="container mx-auto text-indigo-50 w-full flex justify-center text-lg">
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
      </nav>
    </header>
  );
};

export default Header;
