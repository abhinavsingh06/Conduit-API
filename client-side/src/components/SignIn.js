import React, { Component } from "react";
import "../signup.css";

export class SignUp extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Sign In</h1>
          <p>Need an account?</p>
        </div>
        <div className="form-container">
          <form className="form-section">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
          </form>
          <button className="form-btn">Sign In</button>
        </div>
      </>
    );
  }
}

export default SignUp;
