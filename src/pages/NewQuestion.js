import React, { useState } from "react";
import { handleQuestion } from "../actions/questions";
import { useDispatch, useSelector } from "react-redux";
import Option from "../components/NewQuestion/Option";
import { useNavigate } from "react-router";
const NewQuestion = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  return (
    <main className="bg-white">
      <div className="container max-w-lg mx-auto p-5">
        <h1 className="text-center mt-3 mb-8   capitalize font-bold text-indigo-800 text-4xl">
          New Question
        </h1>
        <div className="flex flex-col gap-3">
          <h2 className="capitalize text-xl text-indigo-800 font-semibold">
            would you rather
          </h2>
          <Option placeholder="Choice one" setOption={setOption1} />
          <Option placeholder="Choice Two" setOption={setOption2} />
          <div className="w-full flex gap-2">
            <button
              className="bg-indigo-50 text-indigo-800 py-2 px-6 font-semibold rounded-lg ml-auto"
              onClick={() => Navigate("/")}
            >
              Cancel
            </button>
            <button
              className="bg-indigo-800 text-indigo-50  py-2 px-6 font-semibold rounded-lg"
              onClick={() => {
                if (option1 && option2) {
                  dispatch(handleQuestion(option1, option2, authedUser));
                  Navigate("/");
                }
              }}
            >
              Add New Question
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewQuestion;
