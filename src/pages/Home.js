import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _getQuestions } from "../utils/_DATA.js";
import { receiveQuestions } from "../actions/questions";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  }, []);
  return (
    <>
      <h1 className="text-center">Home</h1>
    </>
  );
};

export default Home;
