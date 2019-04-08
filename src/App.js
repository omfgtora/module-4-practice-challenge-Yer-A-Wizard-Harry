import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  state = {
    wizards: [],
    filteredWizards: []
  }

  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters/students')
      .then(results => results.json())
      .then( json => this.setState({ wizards: json }))
  }

  submitWizard = (wizard) => {
    this.state.wizards.push(wizard)
    if (this.state.filteredWizards.length > 0 && wizard.house === this.state.filteredWizards[0].house) {
      this.state.filteredWizards.push(wizard)
    }
    this.setState({})
  }

  filterByHouse = (house) => {
    if (house === "all") {
      this.setState({filteredWizards: []})
      return
    }
    const filtered = this.state.wizards.filter(wizard => { return wizard.house === house})
    this.setState({filteredWizards: filtered})
  }

  render() {
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings submitWizard={this.submitWizard} filter={this.filterByHouse} />
        { this.state.filteredWizards.length > 0 ? <WizardList wizards={this.state.filteredWizards} /> : <WizardList wizards={this.state.wizards} />}
      </div>
    );
  }
}

export default App;
