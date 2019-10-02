import React, { Component } from "react";
import "../signup.css";
import Header from "./Header";

export class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {};

  render() {
    return (
      <>
        <Header />
        <div className="form-banner">
          <h1>Sign In</h1>
          <p>Have an account?</p>
        </div>
        <div className="form-container">
          <form className="form-section" onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
            ></input>
          </form>
          <button className="form-btn" onClick={this.handleSubmit}>
            Sign In
          </button>
        </div>
      </>
    );
  }
}

export default SignUp;
