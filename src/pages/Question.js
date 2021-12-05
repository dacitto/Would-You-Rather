import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Question = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authed = JSON.parse(localStorage.getItem("authedUser"));
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);
  const vote1 = question ? question.optionOne.votes.length : 0;
  const vote2 = question ? question.optionTwo.votes.length : 0;
  const votes = vote1 + vote2;
  return (
    <main className="bg-white">
      <div className="container max-w-lg mx-auto p-5">
        <ul className="mx-auto max-w-lg  gap-3  flex flex-col ">
          {question && (
            <li
              value={question.id}
              key={question.id}
              className="flex flex-col px-5 pb-5  bg-indigo-50 rounded-xl shadow-lg text-indigo-900"
            >
              <h1 className="p-4 text-lg font-bold">
                {users[question.author]
                  ? users[question.author].name
                  : question.author}{" "}
                asks:
              </h1>
              <div className="flex">
                <div className="w-1/2  rounded-t-full   overflow-hidden flex justify-center items-center">
                  <img
                    src={
                      users[question.author]
                        ? `/profiles/${users[question.author].avatarURL}`
                        : "nothing"
                    }
                    alt="profile"
                    className=" object-cover h-24 w-24 border-2 rounded-full bg-indigo-500"
                  ></img>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <h2 className="text-lg font-bold capitalize">
                    would you rather
                  </h2>
                  <div className="w-full bg-indigo-100 px-2 py-5 rounded-lg">
                    <h3 className="">{question.optionOne.text}</h3>
                    <div className="h-2 rounded-lg  bg-white">
                      <div
                        className="h-2 mt-2 rounded-lg bg-indigo-700"
                        style={{
                          width: votes > 0 ? `${(vote1 / votes) * 100}%` : 0,
                        }}
                      ></div>
                    </div>
                    <div className="h-2 rounded-lg w-min ml-auto ">
                      {vote1}/{votes}
                    </div>
                  </div>

                  <div className="w-full bg-indigo-100 px-2 py-5 rounded-lg">
                    <h3 className="">{question.optionTwo.text}</h3>
                    <div className="h-2 rounded-lg  bg-white">
                      <div
                        className="h-2 mt-2 rounded-lg bg-indigo-700"
                        style={{
                          width: votes > 0 ? `${(vote2 / votes) * 100}%` : 0,
                        }}
                      ></div>
                    </div>
                    <div className="h-2 rounded-lg w-min ml-auto ">
                      {vote2}/{votes}
                    </div>
                  </div>

                  <div className="w-full ">
                    <h1 className="text-xl w-max ml-auto">{votes} votes</h1>
                  </div>
                </div>
              </div>
            </li>
          )}
          {!question && <h1>Oooops there is no Question Here D:</h1>}
        </ul>
      </div>
    </main>
  );
};

export default Question;
