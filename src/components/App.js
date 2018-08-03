import React, { Component } from 'react';
import '../css/style.css';
import Impact from './Impact.js';
import Action from './Action.js';
import Recalculate from './Recalculate.js';
import renewableProviders from '../renewableProviders';
import carbonOffsetProviders from '../carbonOffsetProviders';

class App extends Component {

  state = {
    options: {
    },
    renewableProviders: {
    },
    carbonOffsetProviders: {
    },
    offsetCost: {
    }
  };

//TODO: Style new visual structure- see drawing. 
//set state based on zip and household from URL (from home input)
//TODO: Update renewable providers to load based on zip. & Add to ComponentDidUpdate for Recalculate component.
//TODO: amount and offsetCost are hardcoded- calculate with access to api
componentDidMount() {
  const zip = this.props.match.params.zip;
  const household = this.props.match.params.household;
  const options = {
    zip: zip,
    household: household
  }
  this.setState({ options })
  this.setState({ renewableProviders });
  this.setState({ carbonOffsetProviders });
}

//reset state when recalculate form is submitted
updateOptions = updatedOptions => {
  //take a copy of the current state
  let options = { ...this.state.options };
  //update the state
  options = updatedOptions;
  //set that to state
  this.setState({ options });
  this.props.history.push(`/app/${updatedOptions.household}/${updatedOptions.zip}`)
}


  render() {
    return (
      <div className="content">
        <header>
          <h1 className="title">Go Neutral</h1>
          <div className="recalculate">
              <Recalculate 
                updateOptions={ this.updateOptions } 
                options={ this.state.options } 
                />
            </div>
          <nav>
            <ul>
              <li><a href="#">Share</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="left">
            <div className="impact">
              <Impact options={ this.state.options } />
            </div>
          </div>
          <div className="right">
            <div className="action">
              <Action 
                options={ this.state.options }
                renewableProviders={ this.state.renewableProviders } 
                carbonOffsetProviders= { this.state.carbonOffsetProviders }
                />
            </div>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
