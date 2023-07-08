import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const apiUrl = "http://localhost:4000/api/auth/register";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(apiUrl, {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="registerFormWrapper">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label htmlFor="usernameInput">Username</label>
          <input
            id="usernameInput"
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <Link className="registerLoginButton link" to="/login">
          Aleardy have account ?
        </Link>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </div>
    </div>
  );
}
