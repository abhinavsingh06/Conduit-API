import React, { Component } from "react";
import Header from "../src/components/Header";
import SignUp from "../src/components/SignUp";
import SignIn from "../src/components/SignIn";
import Banner from "../src/components/Banner";
import Profile from "../src/components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "../src/components/Aside";
import Feed from "./components/Feed";
import Article from "../src/components/Article";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Route path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </>
    );
  }
}

export default App;
