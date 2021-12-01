import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getQuestions } from "../utils/_DATA.js";
import { receiveQuestions } from "../actions/questions";
import { Link } from "react-router-dom";
import users from "../reducers/users.js";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  }, []);
  const store = useSelector((state) => state);

  return (
    <main className=" bg-white">
      <div className="container max-w-lg mx-auto p-5">
        <div className="flex justify-between font-bold text-indigo-800 mb-6 rounded-xl bg-indigo-100">
          <botton className="capitalize text-center w-full p-4">
            unanswerred questions
          </botton>
          <botton className="capitalize text-center w-full p-4">
            answerred questions
          </botton>
        </div>
        <ul className="mx-auto max-w-lg  gap-3  flex flex-col ">
          {Object.values(store.questions).map((question) => (
            <li
              value={question.id}
              key={question.id}
              className="flex flex-col px-5 pb-5  bg-indigo-50 rounded-xl shadow-lg"
            >
              <h1 className="p-4 text-lg font-bold">
                {store.users[question.author]
                  ? store.users[question.author].name
                  : question.author}{" "}
                asks:
              </h1>
              <div className="flex">
                <div className="w-1/2  rounded-t-full   overflow-hidden flex justify-center items-center">
                  <img
                    src={
                      store.users[question.author]
                        ? "./profiles/" + store.users[question.author].avatarURL
                        : "nothing"
                    }
                    alt="profile"
                    className=" object-cover h-24 w-24 border-2 rounded-full bg-indigo-500"
                  ></img>
                </div>
                <div className="w-full">
                  <h2 className="text-lg font-bold capitalize">
                    would you rather
                  </h2>
                  <h3>{question.optionOne.text}</h3>
                  <a className="capitalize w-full block text-center font-bold bg-indigo-50 hover:bg-green-400 hover:text-green-50 p-1 border-2 border-green-400 cursor-pointer rounded-md text-green-400">
                    view poll
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
