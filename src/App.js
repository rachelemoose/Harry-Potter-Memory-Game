import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import WizardCard from "./components/WizardCard";
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
      <div>
      <Navbar 
        score={this.state.score} 
      />
        <Jumbotron />
        <div className="wrapper">
          {this.state.wizard.map(wizard => (
            <WizardCard
              imageClick={this.imageClick}
              id={wizard.id}
              key={wizard.id}
              image={wizard.image}
            />
          )
          )
          }
        </div>
      </div>
    );
  }
}

export default App;
