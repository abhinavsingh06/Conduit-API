import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Aside from "../components/Aside";
import "../home.css";

export class Home extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <div>
          <Banner />
        </div>
        <div className="body-container">
          <Feed />
          <Aside />
        </div>
      </>
    );
  }
}

export default Home;
