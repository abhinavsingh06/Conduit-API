import React, { Component } from "react";
import Header from "../src/components/Header";
import Home from "./components/Home";
import SignUp from "../src/components/SignUp";
import SignIn from "../src/components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </>
    );
  }
}

export default App;
