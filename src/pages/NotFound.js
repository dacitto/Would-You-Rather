import React from "react";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center">
      <h1 className="mt-14 text-indigo-900 text-8xl text-center">Error 404</h1>
      <h1 className=" text-indigo-900 text-xl capitalize">page not found !</h1>
      <button
        className="mt-12 text-indigo-800 text-xl capitalize border-indigo-800 border-2 p-3 rounded-lg font-bold hover:text-indigo-50 transition-all duration-300 hover:bg-indigo-800"
        onClick={() => navigate("/")}
      >
        back to home page
      </button>
    </main>
  );
};

export default NotFound;
