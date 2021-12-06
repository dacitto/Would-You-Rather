import React from "react";

const NewQuestion = () => {
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
          <input
            type="text"
            name="choice1"
            className="w-full p-3 rounded-lg shadow-x border-2 capitalize"
            placeholder="choice One"
          />
          <input
            type="text"
            name="choice2"
            className="w-full p-3 rounded-lg shadow-x border-2 capitalize"
            placeholder="choice Two"
          />
          <button className="bg-indigo-800 text-indigo-50 w-max p-3 rounded-lg ml-auto">
            Add New Question
          </button>
        </div>
      </div>
    </main>
  );
};

export default NewQuestion;
