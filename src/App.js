import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import WizardCard from "./components/WizardCard";
import wizard from "./wizard.json";

// sets state to 0 or empty for array of Wizards that have been clicked
class App extends Component {
  state = {
    wizard,
    clickedWizard: [],
    score: 0
  };

// when you click on an image, capture image clicked as a wizard clicked
imageClick = event => {
  const currentWizard = event.target.alt;
  const wizardClicked =
    this.state.clickedWizard.indexOf(currentWizard) > -1;

// if you click on a wizard that has already been selected, the game is reset and cards reordered
  if (wizardClicked) {
    this.setState({
      wizard: this.state.wizard.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedWizard: [],
      score: 0
    });
      alert("You already clicked that Wizard! You've lost. Play again?");

// if you click on a new wizard, your score is increased and cards reordered
  } else {
    this.setState(
      {
        wizard: this.state.wizard.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedWizard: this.state.clickedWizard.concat(
          currentWizard
        ),
        score: this.state.score + 1
      },

//if you get all 12 corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("Congrats! You Win!");
          this.setState({
            wizard: this.state.wizard.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedWizard: [],
            score: 0
          });
        }
      }
    );
  }
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
