import React, { Component } from 'react';
import Timer from './component/timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Marvel Cinematic Universe Movies</h2>
        <header className="App-header">
          <h5>Captian Marvel</h5>
          <Timer month="2" days="8"></Timer>

          <h5>Avengers : End Game</h5>
          <Timer month="3" days="26"></Timer>
        </header>
      </div>
    );
  }
}

export default App;
