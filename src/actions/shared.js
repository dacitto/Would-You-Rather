import { _getUsers } from "../utils/_DATA.js";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

//const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => {
  return (dispatch) => {
    console.log(_getUsers());
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
};
