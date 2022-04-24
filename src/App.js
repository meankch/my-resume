import React, { Component } from "react";
import "./App.css";
// import ResponsiveDrawer from "./components/menubar";
// import { Typography, Box, Toolbar } from "@mui/material";
import NewResponsiveDrawer from "./components/newbar";

class App extends Component {
  render() {
    return (
      <NewResponsiveDrawer></NewResponsiveDrawer>
    );
  }
}

export default App;
