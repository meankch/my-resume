import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Skills from "./components/skills";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="main">
          <About></About>
          <Skills></Skills>
        </div>
      </div>
    );
  }
}

export default App;