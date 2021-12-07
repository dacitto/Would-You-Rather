import { _saveQuestionAnswer } from "../utils/_DATA";
import { _saveQuestion } from "../utils/_DATA";
import { addQuestionToUser } from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
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
export const handleAnswer = (qid, answer, authedUser) => {
  return (dispatch) => {
    return _saveQuestionAnswer({ qid, authedUser, answer }).then(() => {
      console.log("answer added");
      dispatch(addAnswer({ qid, authedUser, answer }));
    });
  };
};
export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const handleQuestion = (optionOneText, optionTwoText, author) => {
  return (dispatch) => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        console.log("Question added");
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
};
