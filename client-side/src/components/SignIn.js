import React, { Component } from "react";
import "../signup.css";
import Header from "./Header";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => this.props.history.push("/"));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

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
              onChange={this.handleChange}
              name="email"
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
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

export default SignIn;
