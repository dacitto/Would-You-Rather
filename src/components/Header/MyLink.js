import React from "react";
import { Link } from "react-router-dom";
const MyLink = ({ path = "/", name, setActive, active }) => {
  const activeClasses = "font-bold underline";
  console.log("active");
  console.log(active);
  return (
    <Link
      to={path}
      className={active === path ? activeClasses : ""}
      onClick={() => {
        setActive(path);
      }}
    >
      {name}
    </Link>
  );
};

export default MyLink;
