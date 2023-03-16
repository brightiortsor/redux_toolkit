import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
      className="btn btn-primary"
        onClick={() => {
          dispatch(
            login({ name: "Bright", age: 30, email: "iortsor@gmail.com" })
          );
        }}
      >
        Login
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
