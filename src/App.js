import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import wizard from "./wizard.json";

//sets state to 0 or empty
class App extends Component {
  state = {
    wizard,
    clickedWizard: [],
    score: 0
  };


  render() {
    return (
      <div className="App">
      <Navbar 
        score={this.state.score} 
      />
        <Jumbotron />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;
