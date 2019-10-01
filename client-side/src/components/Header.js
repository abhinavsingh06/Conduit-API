import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../header.css";

export class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <h1>
              <Link to="/" className="logo-txt">
                conduit
              </Link>
            </h1>
          </div>
          <ul className="navbar-list">
            <Link to="/" className="link-txt">
              Home
            </Link>
            <Link to="/signin" className="link-txt">
              Sign In
            </Link>
            <Link to="/signup" className="link-txt">
              Sign Up
            </Link>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
