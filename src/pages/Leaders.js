import React from "react";
import { useSelector } from "react-redux";
import Leader from "../components/Leaders/Leader";

const Leaders = () => {
  const users = useSelector((state) => state.users);
  let rank = 1;
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
              <Leader key={user.id} user={user} rank={rank++} />
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Leaders;
