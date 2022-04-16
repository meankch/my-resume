import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
					  <About></About>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;