import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../../actions/authedUser";
const Login = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userID, setUserID] = useState("");
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-900  to-blue-500 flex justify-center items-center">
      <main className="bg-white rounded w-52 flex flex-col gap-6 p-4">
        <h1 className="text-4xl text-center ">Login</h1>
        <select
          onChange={(e) => {
            setUserID(e.target.value);
          }}
        >
          <option></option>
          {Object.values(users).map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 text-white capitalize rounded"
          onClick={() => {
            dispatch(setAuthedUser(userID));
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
