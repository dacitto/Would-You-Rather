import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getQuestions } from "../utils/_DATA.js";
import { receiveQuestions } from "../actions/questions";
import { Link } from "react-router-dom";
import users from "../reducers/users.js";
const Home = () => {
  const [answerredQuestions, setAnswerredQuestions] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  }, []);

  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const authed = JSON.parse(localStorage.getItem("authedUser"));
  const answeredIds = users[authed] ? Object.keys(users[authed].answers) : [];
  const [answered, setAnswered] = useState(false);
  return (
    <main className="bg-white">
      <div className="container max-w-lg mx-auto p-5">
        <div className="flex justify-between font-bold text-indigo-800 overflow-hidden mb-6 rounded-xl bg-indigo-100 ">
          <div
            className={`capitalize text-center w-full p-4 cursor-pointer ${
              !answered ? "bg-indigo-700 text-white" : ""
            }`}
            onClick={() => setAnswered(false)}
          >
            unanswerred questions
          </div>
          <div
            className={`capitalize text-center w-full p-4 cursor-pointer ${
              answered ? "bg-indigo-700 text-white" : ""
            }`}
            onClick={() => setAnswered(true)}
          >
            answerred questions
          </div>
        </div>
        <ul className="mx-auto max-w-lg  gap-3  flex flex-col ">
          {Object.values(questions)
            .filter(
              (question) => answeredIds.includes(question.id) === answered
            )
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((question) => (
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
                          ? "./profiles/" + users[question.author].avatarURL
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
                    <h3>1- {question.optionOne.text}</h3>
                    <h3 className="mb-4">2- {question.optionTwo.text}</h3>
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
