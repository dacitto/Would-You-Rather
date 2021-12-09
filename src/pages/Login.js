import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userID, setUserID] = useState("");
  return (
    <div className="w-full min-h-screen flex flex-col pt-40 items-center gap-10">
      <h1 className="font-wyr text-6xl capitalize text-indigo-800">
        would you rather
      </h1>
      <main className="rounded-lg w-full max-w-sm bg-indigo-50 shadow-2xl flex flex-col gap-6 p-4">
        <h1 className="text-5xl text-center font-wyr font-bold uppercase text-indigo-800  ">
          - Login -
        </h1>
        <h3>Please select a user to login</h3>
        <select
          onChange={(e) => {
            setUserID(e.target.value);
          }}
          className="p-3 rounded-lg"
        >
          <option value="">Please select a user to login</option>
          {Object.values(users).map((user) => (
            <option value={user.id} key={user.id}>
              - {user.name}
            </option>
          ))}
        </select>
        <button
          className="bg-indigo-500 text-white text-lg font-semibold p-2 capitalize rounded-lg"
          onClick={() => {
            if (userID) {
              dispatch(setAuthedUser(userID));
              //localStorage.setItem("authedUser", JSON.stringify(userID));
              navigate("/");
            }
          }}
          disabled={userID ? false : true}
        >
          login
        </button>
      </main>
    </div>
  );
};

export default Login;
