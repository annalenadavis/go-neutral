import React, { Component } from 'react';
import '../css/style.css';
import Impact from './Impact.js';
import Action from './Action.js';
import Calculate from './Calculate.js';
import Home from './Home.js';

class App extends Component {

  state = {
    footprint: {}
  };

  // TODO: May need to check for and delete old state first.  Will depend on 
  // whether or not I want to keep all previous states in the footprint object, or 
  // just the most recent
  updateFootprint = footprintFactors => {
    // Take a copy of existing state
    const footprint = {...this.state.footprint};
    //Replace with the new state
    footprint[`fp${Date.now()}`] = footprintFactors;
    //set the new object to state
    this.setState({ footprint });
  }

  //TODO: Keep track of footprint state in local storage when component mounts, updates, etc
  
  render() {
    return (
      <div className="content">
        <main>
        <div className="home">
            <Home />
          </div>
          <div className="calculate">
            <Calculate updateFootprint={this.updateFootprint}/>
          </div>
          <div className="impact">
            <Impact />
          </div>
          <div className="action">
            <Action />
          </div>
        </main>
      </div>
    );
  }
}


export default App;
