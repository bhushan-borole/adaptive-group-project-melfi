import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-sm fixed-top navbar-light"
        style={{ zIndex: "1" }}
      >
        <Link className="navbar-brand" to="/dr-melfi" style={{ color: "#fff" }}>
          Dr. Melfi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {auth().currentUser ? (
            <div className="navbar-nav">
              <button
                className="btn btn-primary mr-3"
                onClick={() => auth().signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link mr-3"
                to="/dr-melfi/login"
                style={{ color: "#74808a" }}
              >
                Sign In
              </Link>
              <Link
                className="nav-item nav-link mr-3"
                to="/dr-melfi/signup"
                style={{ color: "#74808a" }}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
