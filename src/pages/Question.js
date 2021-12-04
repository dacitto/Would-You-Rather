import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Question = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Question;
