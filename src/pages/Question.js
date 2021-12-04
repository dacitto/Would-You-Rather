import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Question = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  }, []);

  const users = useSelector((state) => state.users);
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Question;
