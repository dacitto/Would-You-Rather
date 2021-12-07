import React from "react";
import { useDispatch } from "react-redux";
import { handleAnswer } from "../../actions/questions";
const Vote = ({ question, authed, vote, votes, option }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={
        !question["optionOne"].votes.includes(authed) &&
        !question["optionTwo"].votes.includes(authed)
          ? () => dispatch(handleAnswer(question.id, option, authed))
          : null
      }
      className={`w-full bg-indigo-100 px-2 py-5 rounded-lg cursor-pointer ${
        question[option].votes.includes(authed)
          ? "border-green-500 border-2"
          : ""
      }`}
    >
      <h3 className="">{question[option].text}</h3>
      <div className="h-2 rounded-lg  bg-white">
        <div
          className="h-2 mt-2 rounded-lg bg-indigo-700"
          style={{
            width: votes > 0 ? `${(vote / votes) * 100}%` : 0,
          }}
        ></div>
      </div>
      <div className="h-2 rounded-lg w-min ml-auto">
        {votes ? ((vote / votes) * 100).toFixed(2) : 0}%
      </div>
    </div>
  );
};

export default Vote;
