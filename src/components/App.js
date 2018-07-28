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
        <main>
          <div className="left">
            <div className="impact">
              <Impact options={ this.state.options } />
            </div>
            <div className="recalculate">
              <Recalculate 
                updateOptions={ this.updateOptions } 
                options={ this.state.options } 
                />
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
