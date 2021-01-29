import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="hr_line">
        <hr />
      </div>
      <div className="login">
        {/* <Link to="/">
          <img className="login_logo" src="./images/logo.jpg" alt="" />
        </Link> */}

        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login_signInButton"
            >
              Sign In
            </button>
          </form>

          <p>By signing-in you agree to the Terms and Conditions.</p>

          <button onClick={register} className="login_registerButton">
            Create your Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;