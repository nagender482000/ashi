import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
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
          <h1>Log-in or Register</h1>
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
          <h6>Or Register yourself</h6>
          <button onClick={register} className="login_registerButton">
            Create your Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
