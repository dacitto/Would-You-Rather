import { _getUsers } from "../utils/_DATA.js";
import { _getQuestions } from "../utils/_DATA.js";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

export const handleInitialData = () => {
  return async (dispatch) => {
    const users = await _getUsers();
    const questions = await _getQuestions();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(JSON.parse(localStorage.getItem("authedUser"))));

    /*
    .then((users) => {
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(JSON.parse(localStorage.getItem("authedUser"))));
    });
    */
  };
};
