import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full py-5 bg-blue-900">
      <nav className="container mx-auto text-white w-full flex justify-center text-lg">
        <span className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/">Leader board</Link>
          <Link to="/">Home</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
