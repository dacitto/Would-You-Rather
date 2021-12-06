import React, { useState } from "react";
import { handleQuestion } from "../actions/questions";
import { useDispatch, useSelector } from "react-redux";
import Option from "../components/NewQuestion/Option";
const NewQuestion = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  console.log(option1);
  console.log(option2);
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

          <button
            className="bg-indigo-800 text-indigo-50 w-max p-3 rounded-lg ml-auto"
            onClick={() => {
              if (option1 && option2) {
                dispatch(handleQuestion("daci", "salah", authedUser));
              }
            }}
          >
            Add New Question
          </button>
        </div>
      </div>
    </main>
  );
};

export default NewQuestion;
