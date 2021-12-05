import React from "react";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const Leaders = () => {
  const users = useSelector((state) => state.users);
  let placement = 1;
  return (
    <main className="bg-white">
      <div className="container max-w-lg mx-auto p-5">
        <h1 className="text-center mt-3 mb-8   capitalize font-bold text-indigo-800 text-4xl">
          Leader board
        </h1>

        <ul className="mx-auto max-w-lg  gap-3  flex flex-col ">
          {Object.values(users)
            .sort((user1, user2) => {
              const user1Points =
                Object.keys(user1.answers).length + user1.questions.length;
              const user2Points =
                Object.keys(user2.answers).length + user2.questions.length;
              return user2Points - user1Points;
            })
            .map((user) => (
              <li
                key={user.id}
                className="flex px-5 p-5 gap-4 items-center bg-indigo-50 rounded-xl shadow-lg text-indigo-900"
              >
                <h2 className="items-center text-4xl">#{placement++}</h2>

                <img
                  src={
                    user.avatarURL ? "./profiles/" + user.avatarURL : "nothing"
                  }
                  alt="profile"
                  className=" object-cover h-16 w-16 border-2 rounded-full bg-indigo-500"
                ></img>

                <h1 className="text-lg font-bold">{user.name}</h1>
                <div className="flex ml-auto  items-center">
                  <h2 className="font-bold capitalize text-5xl">
                    {Object.keys(user.answers).length + user.questions.length}{" "}
                  </h2>
                  <AiFillStar className="text-yellow-400 text-4xl " />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Leaders;
