import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import Vote from "../components/Vote";

const Question = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const authed = useSelector((state) => state.authedUser);
  //const authed = JSON.parse(localStorage.getItem("authedUser"));
  const { id } = useParams();
  const [voted, setVoted] = useState(false);
  const questions = useSelector((state) => state.questions);
  const question = useSelector((state) => state.questions[id]);
  const vote1 = question ? question.optionOne.votes.length : 0;
  const vote2 = question ? question.optionTwo.votes.length : 0;
  const votes = vote1 + vote2;

  useEffect(() => {
    questions && !question && navigate("/NoFound");
  }, [questions, question, navigate]);
  return (
    <main className="bg-white">
      <div className="container max-w-lg mx-auto p-5">
        <ul className="mx-auto max-w-lg  gap-3  flex flex-col ">
          {questions && question && (
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
                        : "/profiles/default.jpg"
                    }
                    alt="profile"
                    className=" object-cover h-24 w-24 border-2 rounded-full bg-indigo-500"
                  ></img>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <h2 className="text-lg font-bold capitalize">
                    would you rather
                  </h2>
                  <div className="flex-shrink-0 flex-col flex gap-3">
                    <Vote
                      vote={vote1}
                      question={question}
                      authed={authed}
                      votes={votes}
                      voted={voted}
                      setVoted={setVoted}
                      option="optionOne"
                    ></Vote>
                    <Vote
                      vote={vote2}
                      question={question}
                      authed={authed}
                      votes={votes}
                      option="optionTwo"
                      voted={voted}
                      setVoted={setVoted}
                    ></Vote>
                  </div>
                  <div className="w-full flex items-center">
                    <button
                      className="bg-indigo-200 py-1 px-4 flex items-center gap-2 rounded-md text-indigo-800 font-semibold"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      <BiArrowBack />
                      Back
                    </button>
                    <h1 className="text-xl w-max ml-auto">{votes} votes</h1>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Question;
