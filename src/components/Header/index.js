import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState("/");
  const activeClasses = "font-bold underline";
  return (
    <header className="w-full py-5 bg-indigo-800">
      <nav className="container mx-auto text-indigo-50 w-full flex justify-center text-lg">
        <span className="flex gap-4">
          <Link
            to="/"
            className={active === "/" ? activeClasses : ""}
            onClick={() => {
              setActive("/");
            }}
          >
            Home
          </Link>
          <Link
            to="/leaders"
            onClick={() => {
              setActive("/leaders");
            }}
            className={active === "/leaders" ? activeClasses : ""}
          >
            Leader board
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
