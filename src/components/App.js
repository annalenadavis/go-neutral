import React, { Component } from 'react';
import '../css/style.css';
import Impact from './Impact.js';
import Action from './Action.js';
import Recalculate from './Recalculate.js';

class App extends Component {

  state = {
    options: {
    }
  };

//set state based on zip and household from URL (from home input)
componentDidMount() {
  const zip = this.props.match.params.zip;
  const household = this.props.match.params.household;
  const options = {
    zip: zip,
    household: household
  }
  this.setState({ options })
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
            {/* <div className="calculate">
              <Calculate updateFootprint={this.updateFootprint}/>
            </div> */}
            <div className="impact">
              <Impact />
            </div>
            <div className="recalculate">
              <Recalculate updateOptions={this.updateOptions} state={this.state} />
            </div>
          </div>
          <div className="right">
            <div className="action">
              <Action />
            </div>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
