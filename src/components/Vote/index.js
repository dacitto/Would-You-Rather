import React from "react";
import { useDispatch } from "react-redux";
import { handleAnswer } from "../../actions/questions";
const Vote = ({ question, authed, vote, votes, option, voted, setVoted }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={
        !question["optionOne"].votes.includes(authed) &&
        !question["optionTwo"].votes.includes(authed) &&
        !voted
          ? () => {
              setVoted(true);
              dispatch(handleAnswer(question.id, option, authed));
            }
          : null
      }
      className={`w-full bg-indigo-100 pb-3 px-2 flex-shrink-0 rounded-lg cursor-pointer ${
        question[option].votes.includes(authed)
          ? "border-green-500 border-2"
          : ""
      }`}
    >
      <h3 className="my-2">{question[option].text}</h3>
      <div className="h-2 rounded-lg  bg-white">
        <div
          className="h-full rounded-lg bg-indigo-700"
          style={{
            width: votes > 0 ? `${(vote / votes) * 100}%` : 0,
          }}
        ></div>
      </div>
      <div className="flex w-full my-2">
        <div className="h-2 rounded-lg w-max flex font-light gap-2">
          <b className="font-bold">{vote}</b> out of{" "}
          <b className="font-bold">{votes}</b> votes
        </div>
        <div className="h-2 rounded-lg w-min ml-auto">
          {votes ? ((vote / votes) * 100).toFixed(1) : 0}%
        </div>
      </div>
    </div>
  );
};

export default Vote;
