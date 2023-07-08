import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const apiUrl = "http://localhost:4000/api/auth/login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(apiUrl, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="loginFormWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="usernameInput">Username</label>
          <input
            id="usernameInput"
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
            ref={userRef}
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <Link className="loginRegisterButton link" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}
