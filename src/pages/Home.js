import React, { Component } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section>
        <div
          className="jumbotron jumbotron-fluid py-5"
          style={{ background: "rgba(46, 45, 43, 1)" }}
        >
          <div className="container text-center py-5">
            <h1 className="display-4" style={{ color: "#fff" }}>
              Welcome to Dr. Melfi
            </h1>
            <p className="lead" style={{ color: "#74808a" }}>
              A great place to find some worth to binge.
              <br />
              Help us suggest you better ways to kill your time.
            </p>
            <div className="mt-4">
              <Link className="btn btn-primary px-5 mr-3" to="/dr-melfi/signup">
                Create New Account
              </Link>
              <Link className="btn btn-secondary px-5" to="/dr-melfi/login">
                Login to Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
