import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};
export const addAnswer = ({ qid, authedUser, answer }) => {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
};

export const handleAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({ qid, authedUser, answer }).then(() => {
      console.log("answer added");
      dispatch(addAnswer({ qid, authedUser, answer }));
    });
  };
};
