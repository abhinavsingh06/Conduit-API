import React from "react";
import Header from "../src/components/Header";
import SignUp from "../src/components/SignUp";
import Banner from "../src/components/Banner";
import "./App.css";

function App() {
  return (
    <>
      <header className="header-container App-header">
        <Header />
      </header>

      <Banner />
    </>
  );
}

export default App;
