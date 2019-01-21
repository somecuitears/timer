import React, { Component } from 'react';
import Timer from './component/timer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>You have </h5>
          <Timer></Timer>
        </header>
      </div>
    );
  }
}

export default App;
