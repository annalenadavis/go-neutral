import React, { Component } from 'react';
import '../css/style.css';
import Impact from './Impact.js';
import Recalculate from './Recalculate.js';
import renewableProviders from '../renewableProviders';
import carbonOffsetProviders from '../carbonOffsetProviders';
import Renewable from './Renewable.js';
import GoNeutral from './GoNeutral.js';

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
  }

  //Data TODOs:
//TODO: Replace local renewables list with full list and show based on state (based on zip entered)
//TODO: Update renewable providers to load based on zip. & Add to ComponentDidUpdate for Recalculate component.
//TODO: amount and offsetCost are hardcoded- calculate with access to api
//TODO: Edit list of carbon offset providers- where to store this data?
//TODO: Combine two EPA databases to show where energy comes from (coal, wind, etc)

//Render TODOs:
//TODO: Graphics for Impact compnonent: plane, car, house, shopping
//TODO: Graphics for each conponent title: see sketch
//TODO: Style lists of providers
//TODO: MOBILE STYLES
//TODO: Lines between info-boxes
//TODO: Render Share & About popups
//TODO: Add a "why care" button?


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

showRenewableProviders = () => {
  const providers = this.refs.providers;
  providers.classList.toggle("active");
}

goHome = e => {
  e.preventDefault();
  this.props.history.push(`/`)
}

  render() {
    return (
      <div className="content">
        <header>
          <h1 className="title" onClick={this.goHome}>Go Neutral</h1>
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
              <div className="info-box">
                    <ol className="helpful-hints">
                        <li><p>It's easier than you think!</p></li>
                        <li><p>Grab your <span className="bold">account number</span> from your current energy provider</p></li>
                        <li><p>If you can't get it directly, get energy certificates which support renewables</p></li>
                    </ol>
                    <h4 className="list-toggle" onClick={this.showRenewableProviders}> + Choose a provider + </h4>
                    <ul className="provider-list" ref="providers">
                        {Object.keys(this.state.renewableProviders).map(key=> (
                            <Renewable key={key} details={this.state.renewableProviders[key]} />
                            ))}
                    </ul>
              </div>
            </div>
            <div>
              <GoNeutral 
              options={ this.state.options } 
              carbonOffsetProviders= { this.state.carbonOffsetProviders } 
              />
            </div>
            <div className="info-wrapper">
              <div className="info-box">
                <p>Woohoo! You just helped climate change in two easy steps!</p>
              </div>
            </div>
            <div className="info-wrapper">
              <h3>Do More</h3>
              <div className="info-box">
                <p>Calculate > Reduce > Balance</p>
                <ol>
                  <li><p>Woohoo! We're so glad you want to do more</p></li>
                  <li><p>First <span className="bold">calculate</span> a more accurate carbon footprint</p></li>
                  <li><p>Then see what you can do to <span className="bold">reduce</span> your footprint</p></li>
                  <li><p>And <span className="bold">balance</span> with carbon offsets</p></li>
                  <li><p>Some bigger impact steps you can take include flying less and buying an electric or hybrid car</p></li>
                  <li><p>Also write to your Representatives in support of implementing a carbon tax (learn about it on <a href="https://www.npr.org/sections/money/2018/07/18/630267782/episode-472-the-one-page-plan-to-fix-global-warming-revisited">Planet Money</a>)</p></li>
                </ol>
              </div>
            </div>
            <div className="info-wrapper">
              <h3>Keep in touch</h3>
              <div className="info-box">
                <p>Sign up for our email list</p>
                <p>Get remined every 6 months, annually, or get regular updates</p>
              </div>
            </div>
        </main>
      </div>
    );
  }
}


export default App;
