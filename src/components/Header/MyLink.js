import React from "react";
import { Link } from "react-router-dom";
const MyLink = ({ path = "/", name, setActive, active, icon }) => {
  const classes = "flex items-center gap-1";
  const activeClasses = `${classes} font-semibold border-b-2 border-indigo-400`;
  return (
    <Link
      to={path}
      className={active === path ? activeClasses : classes}
      onClick={() => {
        setActive(path);
      }}
    >
      {icon}
      {name}
    </Link>
  );
};

export default MyLink;
