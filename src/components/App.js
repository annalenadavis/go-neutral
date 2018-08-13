import React, { Component } from 'react';
import '../css/style.css';
import Impact from './Impact.js';
import Recalculate from './Recalculate.js';
import renewableProviders from '../renewableProviders';
import carbonOffsetProviders from '../carbonOffsetProviders';
import Renewable from './Renewable.js';
import GoNeutral from './GoNeutral.js';
import energybulb from '../css/images/energybulb.png';
import sun from '../css/images/sun.png';
import step1stamp from '../css/images/step1stamp.png';
import calculator from '../css/images/calculator.png';
import reduce from '../css/images/reduce.png';
import balance from '../css/images/balance.png';

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
//TODO: add prop types to all props

//Render TODOs:
//TODO: MOBILE STYLES
//TODO: Render Share & About popups
//TODO: Finish Keep in Touch info box


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

toggleSharePopup = e => {
  e.preventDefault();
  const sharePopup = this.refs.sharePopup;
  sharePopup.classList.toggle("open");
}

  render() {
    return (
      <div className="content">
        <header>
          <h1 className="title" onClick={ this.goHome }>Go Neutral</h1>
          <Recalculate 
              updateOptions={ this.updateOptions } 
              options={ this.state.options } 
          />
          <nav>
            <ul>
              <li><a href="#" onClick={ this.toggleSharePopup }>Share</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </header>
        <div className="share-popup-wrapper" ref="sharePopup">
          <div className="share-popup">
            <h3>Share with others.</h3>
            <div className="share-wrapper open">
              <p>T</p>
              <p>F</p>
              <p>G</p>
              <p>E</p>
            </div>
          </div>
          <div className="share-close" onClick={ this.toggleSharePopup }>
            <button className="close">X</button>
          </div>
        </div>
        <main className="app">
            <div>
              <Impact options={ this.state.options } />
            </div>
            <div className="info-wrapper right-wrapper">
              <img src={ energybulb } className="icon"/>
                <h3>Your Energy</h3>
              <div className="info-box">
                <p>Energy in your zip code comes from oil, coal, hydro,
                  nuclear, gas, wind, and solar.
                </p>
              </div>
              <a className="right-wrapper" target="_blank" href="https://oaspub.epa.gov/powpro/ept_pack.charts">Find out exactly how much from each</a>
            </div>
            <div className="info-wrapper left-wrapper energy-box">
              <img src={ sun } className="icon"/>
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
                    <img src = { step1stamp } className="stamp stamp1" />
              </div>
            </div>
            <div>
              <GoNeutral 
              options={ this.state.options } 
              carbonOffsetProviders= { this.state.carbonOffsetProviders } 
              />
            </div>
            <div className="info-wrapper left-wrapper do-more">
              <h3>Do More</h3>
              <div className="info-box">
                <p>That's so great you want to do more! The best way is to:</p>
                <p>Calculate > Reduce > Balance</p>
                <img src={ calculator } className="icon"/>
                <img src={ reduce } className="icon"/>
                <img src={ balance } className="icon"/>
                <ol>
                  <li><a className="do-more-link" target="_blank" href="https://coolclimate.berkeley.edu/calculator">Calculate a more detailed footprint</a></li>
                  <li><p>What are the biggest parts of your footprint? Take action to <span className="bold">reduce</span> those areas. This might mean you:</p></li>
                            <ul className="do-more-ideas">
                              <li><p>Fly less</p></li>
                              <li><p>Go vegetarian (or eat less beef)</p></li>
                              <li><p>Stop driving (or drive an electric or hybrid)</p></li>
                              <li><p>Heat and cool your home less</p></li>
                            </ul>
{/*                   
                  <li><p>The big three for most people are: fly less, go vegetarian, and get rid of your car</p></li>
                  <li><p>Or eat less beef and drive an electric or hybrid car instead</p></li> */}
                  {/* <li><p>Also write to your Representatives in support of implementing a carbon tax (learn about it on <a target="_blank" href="https://www.npr.org/sections/money/2018/07/18/630267782/episode-472-the-one-page-plan-to-fix-global-warming-revisited">Planet Money</a>)</p></li> */}
                  <li><p>And <span className="bold">balance</span> what is left with carbon offsets</p></li>
                </ol>
              </div>
            </div>
            <div className="info-wrapper right-wrapper">
              <h3>Keep in touch</h3>
              <div className="info-box">
                <p>Sign up for our email list</p>
                <p>Get reminded every 6 months, annually, or get regular updates</p>
              </div>
            </div>
            <div className="left-wrapper"></div>
        </main>
      </div>
    );
  }
}


export default App;
