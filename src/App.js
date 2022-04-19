import React, { Component } from "react";
import "./App.css";
import About from "./components/about";
import Skills from "./components/skills";
import ResponsiveDrawer from "./components/menubar";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <ResponsiveDrawer></ResponsiveDrawer>
        <div id="main">
          <About></About>
          <Skills></Skills>
        </div>
      </div>
    );
  }
}

export default App;