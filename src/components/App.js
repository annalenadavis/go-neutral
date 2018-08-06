import React, { Component } from 'react';
import '../css/style.css';
import Impact from './Impact.js';
import Action from './Action.js';
import Recalculate from './Recalculate.js';
import renewableProviders from '../renewableProviders';
import carbonOffsetProviders from '../carbonOffsetProviders';
import Renewable from './Renewable.js';

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
          <Recalculate 
              updateOptions={ this.updateOptions } 
              options={ this.state.options } 
          />
          <nav>
            <ul>
              <li><a href="#">Share</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </header>
        <main className="app">
            <div>
              <Impact options={ this.state.options } />
            </div>
            <div className="info-wrapper right-wrapper">
                <h3>Your Energy</h3>
              <div className="info-box">
                <p>Energy in your zip code comes from oil, coal, hydro,
                  nuclear, gas, wind, and solar.
                </p>
              </div>
            </div>
            <div className="info-wrapper">
              <h3>Get Renewable Energy</h3>
              <div className="info-box list-box">
                    <ol className="helpful-hints" ref="EnergyHints">
                        <li><p>It's easier than you think!</p></li>
                        <li><p>Grab your <span className="bold">account number</span> from your current energy provider</p></li>
                        <li><p>If you can't get it directly, get energy certificates which support renewables</p></li>
                    </ol>
                    <h4 className="list-toggle">Get Renewable Energy</h4>
                    <ul className="renewable-list">
                        {/* {Object.keys(this.state.renewableProviders).map(key=> (
                            <Renewable key={key} details={this.props.renewableProviders[key]} />
                            ))} */}
                    </ul>
              </div>
            </div>
            <div className="action">
              <Action 
                options={ this.state.options }
                renewableProviders={ this.state.renewableProviders } 
                carbonOffsetProviders= { this.state.carbonOffsetProviders }
                />
          </div>
        </main>
      </div>
    );
  }
}


export default App;
