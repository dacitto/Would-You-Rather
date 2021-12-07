import React from "react";
import { AiFillStar } from "react-icons/ai";

const Leader = ({ user, rank }) => {
  const answers = Object.keys(user.answers).length;
  const questions = user.questions.length;
  return (
    <li
      key={user.id}
      className="flex px-5 p-5 gap-4 items-center bg-indigo-50 rounded-xl shadow-lg text-indigo-900"
    >
      <h2 className="items-center text-4xl">#{rank}</h2>

      <img
        src={user.avatarURL ? "./profiles/" + user.avatarURL : "nothing"}
        alt="profile"
        className=" object-cover h-16 w-16 border-2 rounded-full bg-indigo-500"
      ></img>
      <div>
        <h1 className="text-lg font-bold">{user.name}</h1>
        <h2 className="">
          Answers: <b>{answers}</b>
        </h2>
        <h2 className="">
          Questions: <b>{questions}</b>
        </h2>
      </div>
      <div className="flex ml-auto  items-center">
        <h2 className="font-bold capitalize text-5xl">
          {answers + questions}{" "}
        </h2>
        <AiFillStar className="text-yellow-400 text-4xl " />
      </div>
    </li>
  );
};

export default Leader;
