import React, { Component } from "react";
import "../header.css";

export class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <h1>conduit</h1>
          </div>
          <ul className="navbar-list">
            <a>Home</a>
            <a>Sign In</a>
            <a>Sign Up</a>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
