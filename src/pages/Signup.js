import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { signup, signInWithGoogle, signInWithGitHub } from "../helper/auth";

function SignUp() {
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [error, setError] = useState(null);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const togglePasswordShown1 = () => {
    setPasswordShown1(!passwordShown1);
  };

  const togglePasswordShown2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (password1 === password2) {
      try {
        await signup(email, password1);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Passwords do not match!");
    }
  };

  const googleSignIn = async (event) => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <form
        className="mt-5 py-5 px-5"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 style={{ color: "#74808a" }}>
          Sign Up to
          <Link className="title ml-2" to="/dr-melfi">
            Justalk
          </Link>
        </h1>
        <br />
        <div className="form-group row">
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              className="form-control"
              placeholder="Enter Password"
              name="password1"
              onChange={(e) => setPassword1(e.target.value)}
              value={password1}
              type={passwordShown1 ? "text" : "password"}
            ></input>
            <span>
              <i
                class={passwordShown1 ? "bi bi-eye" : "bi bi-eye-slash"}
                onClick={togglePasswordShown1}
              ></i>
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              className="form-control"
              placeholder="Re-enter Password"
              name="password2"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
              type={passwordShown2 ? "text" : "password"}
            ></input>
            <span>
              <i
                class={passwordShown2 ? "bi bi-eye" : "bi bi-eye-slash"}
                onClick={togglePasswordShown2}
              ></i>
            </span>
          </div>
        </div>
        <div className="form-group row">
          {error ? <p className="text-danger">{error}</p> : null}
          <button className="btn btn-primary px-5" type="submit">
            Sign up
          </button>
        </div>
        <div className="form-group row">
          <p style={{ color: "rgb(116, 128, 138)" }}>
            You can also sign up with any of these services
          </p>
        </div>
        <div className="form-group row">
          <button
            className="btn btn-danger mr-2"
            type="button"
            onClick={googleSignIn}
          >
            Sign up with Google
          </button>
        </div>
        <hr></hr>
        <div className="form-group row">
          <p style={{ color: "rgb(116, 128, 138)" }}>
            Already have an account? <Link to="/dr-melfi/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
