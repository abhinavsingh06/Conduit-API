import React, { Component } from "react";
import Header from "../src/components/Header";
import SignUp from "../src/components/SignUp";
import Banner from "../src/components/Banner";
import Profile from "../src/components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "../src/components/Aside";
import Feed from "./components/Feed";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <>
        <header className="header-container App-header">
          <Header />
        </header>
        <Banner />
        <section className="body-container">
          <Feed />
          <Aside />
        </section>
      </>
    );
  }
}

export default App;
