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
import calculator from '../css/images/calculator-b.png';
import reduce from '../css/images/reduce-b.png';
import balance from '../css/images/balance-b.png';
import twitter from '../css/images/twitter-green.png';
import facebook from '../css/images/facebook-green.png';
import instagram from '../css/images/instagram-green.png';
import email from '../css/images/email-green.png';


class App extends Component {

  state = {
    userDetails: {
    },
    renewableProviders: {
    },
    carbonOffsetProviders: {
    },
  }

  //Data TODOs:
//TODO: Replace local renewables list with full list and show based on state (based on zip entered)
//TODO: Update renewable providers to load based on zip. & Add to ComponentDidUpdate for Recalculate component.
//TODO: emissions (and reducedEmissions) is hardcoded- calculate with access to api
//TODO: Combine two EPA databases to show where energy comes from (coal, wind, etc) ???

//Render TODOs:
//TODO: Render Share & About popups

componentDidMount() {
  const zip = this.props.match.params.zip;
  const household = this.props.match.params.household;
  let emissions;
  let reducedEmissions; //after getting renewable energy
  if (household === "house") {
      emissions = 48.5;
      reducedEmissions = 42;
  } else {
      emissions = 28.2;
      reducedEmissions = 24;
  };
  const userDetails = {
    zip: zip,
    household: household,
    emissions: emissions,
    reducedEmissions: reducedEmissions
  }
  this.setState({ userDetails });
  this.setState({ renewableProviders });
  this.setState({ carbonOffsetProviders });
}

//reset state when recalculate form is submitted
updateUserDetails = updatedUserDetails => {
  //take a copy of the current state
  let userDetails = { ...this.state.userDetails };
  //update the state
  userDetails = updatedUserDetails;
  //update emissions
  let emissions;
  let reducedEmissions;
  if (updatedUserDetails.household === "house") {
    emissions = 48.5;
    reducedEmissions = 42;
  } else {
    emissions = 28.2;
    reducedEmissions = 24;
  };
  userDetails = { 
    ...updatedUserDetails,
    emissions: emissions,
    reducedEmissions: reducedEmissions
  }
  //set that to state
  this.setState({ userDetails });
  this.props.history.push(`/app/${updatedUserDetails.household}/${updatedUserDetails.zip}`)
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
              updateUserDetails={ this.updateUserDetails } 
              userDetails={ this.state.userDetails }
              userInput={ this.state.userInput }
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
            <div className="share-wrapper">
              <p>Help your friends go carbon neutral. Share how easy it is.</p>
            </div>
            <div className="icon-wrapper">
              <a href="#" className="share-icon-border" title="twitter">
                <img src={ twitter } className="share-icon" alt="Share on Twitter"/>
              </a>
              <a href="#" className="share-icon-border" title="facebook">
                <img src={ facebook } className="share-icon" alt="Share on Facebook"/>
              </a>
              <a href="#" className="share-icon-border" title="instagram">
                <img src={ instagram } className="share-icon" alt="Share on Instagram"/>
              </a>
              <a href="#" className="share-icon-border" title="email">
                <img src={ email } className="share-icon" alt="Share by Email"/>
              </a>
            </div>
          <div className="share-close" onClick={ this.toggleSharePopup }>
            <button className="close" aria-label="close popup">X</button>
          </div>
          </div>
        </div>
        <main className="app">
            <div>
              <Impact userDetails={ this.state.userDetails } />
            </div>
            <div className="info-wrapper right-wrapper">
              <div className="info-box-title-bar">
                <img src={ energybulb } className="icon" alt=""/>
                <h3>Your Energy</h3>
              </div>
              <div className="info-box">
                <p>Energy in your zip code comes from oil, coal, hydro,
                  nuclear, gas, wind, and solar.
                </p>
              </div>
              <div className="info-link-wrapper">
                <a className="info-link" href="https://oaspub.epa.gov/powpro/ept_pack.charts">Find out exactly how much from each</a>
              </div>
            </div>
            <div className="info-wrapper left-float">
              <div className="info-box-title-bar">
                <img src={ sun } className="icon" alt=""/>
                <h3>Get Renewable Energy</h3>
              </div>
              <div className="info-box">
                    <img src = { step1stamp } className="stamp stamp1" alt="Big Impact, Little Effort, Step 1"/>
                    <ol className="helpful-hints">
                        <li><p>It's easier than you think!</p></li>
                        <li><p>Grab your <span className="bold">account number</span> from your current energy provider.</p></li>
                        <li><p>If you can't get it directly, get energy certificates which support renewables.</p></li>
                    </ol>
                      <button className="list-toggle" onClick={this.showRenewableProviders}>Choose a provider +</button>
                      <ul className="provider-list" ref="providers">
                          {Object.keys(this.state.renewableProviders).map(key=> (
                              <Renewable key={key} details={this.state.renewableProviders[key]} />
                              ))}
                      </ul>
              </div>
            </div>
            <div>
              <GoNeutral 
              userDetails={ this.state.userDetails } 
              carbonOffsetProviders= { this.state.carbonOffsetProviders } 
              />
            </div>
            <div className="info-wrapper left-wrapper do-more">
              <h3>Do More</h3>
              <div className="info-box">
                <p>That's so great you want to do more! The best way is to:</p>
                <p>Calculate > Reduce > Balance</p>
                <img src={ calculator } className="icon" alt=""/>
                <img src={ reduce } className="icon" alt=""/>
                <img src={ balance } className="icon" alt=""/>
                <ol>
                  <li><a className="do-more-link" target="_blank" rel="noopener noreferrer" href="https://coolclimate.berkeley.edu/calculator">Calculate a more detailed footprint</a></li>
                  <li><p>What are the biggest parts of your footprint? Take action to <span className="bold">reduce</span> those areas. This might mean you:</p></li>
                            <ul className="do-more-ideas">
                              <li><p>Fly less</p></li>
                              <li><p>Go vegetarian (or eat less beef)</p></li>
                              <li><p>Stop driving (or drive an electric or hybrid car)</p></li>
                              <li><p>Heat and cool your home less</p></li>
                            </ul>
                  {/* <li><p>Also write to your Representatives in support of implementing a carbon tax (learn about it on <a target="_blank" href="https://www.npr.org/sections/money/2018/07/18/630267782/episode-472-the-one-page-plan-to-fix-global-warming-revisited">Planet Money</a>)</p></li> */}
                  <li><p>And <span className="bold">balance</span> what is left with carbon offsets</p></li>
                </ol>
              </div>
            </div>
            <div className="info-wrapper right-wrapper">
              <h3>Keep in touch</h3>
              <div className="info-box contact-us">
                <form data-netlify="true">
                  <p>Sign up for our email list</p>
                  <div>
                    <input type="text" className="name" name="name" id="name" required/>
                    <label htmlFor="name" className="visually-hidden">Name (required)</label>
                  </div>
                  <div>
                    <input type="email" name="email" size="30" className="email" id="email" required/>
                    <label htmlFor="email" className="visually-hidden">Email (required)</label>
                  </div>
                  <input type="submit"/>
                </form>
              </div>
            </div>
            <div className="left-wrapper"></div>
        </main>
      </div>
    );
  }
}


export default App;
