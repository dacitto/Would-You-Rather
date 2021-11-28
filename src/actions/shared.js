import { _getUsers } from "../utils/_DATA.js";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => {
  return (dispatch) => {
    console.log(_getUsers());
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
