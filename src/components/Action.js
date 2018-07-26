import React from 'react';
import Renewable from './Renewable.js';
import CarbonOffset from './CarbonOffset.js';

class Action extends React.Component {

//TODO: Replace local renewables list with full list and show based on state (based on zip entered)
//TODO: Finish helpful-hints list for Buying Carbon Offsets (drawings for calculate/reduce/balance?)
//TODO: Edit list of carbon offset providers- where to store this data?
//TODO: finish Do More, Share, and About popups (components for each? Or should it be info be included in this component?)
//TODO: STYLE **everything**

//Repetetive...do I need separate functions for each ref?
setActiveEnergyHints = () => {
    const energyHints = this.refs.EnergyHints;
    energyHints.classList.toggle("active");
}
setActiveOffsetHints = () => {
    const offsetHints = this.refs.OffsetHints;
    offsetHints.classList.toggle("active");
}
showWindowDoMore = () => {
    const doMore = this.refs.DoMore;
    doMore.classList.toggle("active");
}
showWindowShare = () => {
    const share = this.refs.Share;
    share.classList.toggle("active");
}

    render() {
        let household;
        let place;
        let amount;
        let offsetCost = `$({amount}*12) - ({amount}*20)`;

        if (this.props.options.household === "household") {
            household = "household";
            amount = "48.5";
        } else {
            household = "person"
            amount = "28.2"
        };

        if (this.props.options.zip === "US") {
            place = "the U.S.";
        } else {
            place = "the U.S."
        };

        return(
            <div>
                <h1>Make an impact today</h1>
                <div className="renewable">
                    <h3>Get Renewable Energy</h3>
                    <h4 className="list-toggle" onClick={this.setActiveEnergyHints}>Helpful Hints</h4>
                    <ol className="helpful-hints" ref="EnergyHints">
                        <li><p>Supporting wind, solar, or hydro power is easier than you think.</p></li>
                        <li><p>You will need your <span className="bold">account number</span> from your current energy provider</p></li>
                        <li><p>If you can't get renewable directly, you can get renewable energy certificates, so what you spend on electricity will support renewables instead of coal or .</p></li>
                        <li><p>It may cost $5-20 more per month, depending on how big your home is.</p></li>
                    </ol>
                    <ul className="renewable-list">
                        {Object.keys(this.props.renewableProviders).map(key=> (
                            <Renewable key={key} details={this.props.renewableProviders[key]} />
                            ))}
                    </ul>
                </div>
                <div className="carbon-offset">
                    <h3>Buy Carbon Offsets</h3>
                    <h4 className="list-toggle" onClick={this.setActiveOffsetHints}>Helpful Hints</h4>
                    <ol className="helpful-hints" ref="OffsetHints">
                        <li><p>To make an impact, calculate, reduce, then balance your footprint</p></li>
                        <li><p>Going <span className="bold">carbon neutral</span> means you contribute to a project to limit carbon somewhere else to make up for the carbon you emit</p></li>
                        <li><p>Look for credits that are certified by...</p></li>
                        <li><p>You can buy from nonprofits or for profits and support a variety of projects</p></li>
                    </ol>
                    <p>In { place } each { household } emits around { amount } tons of carbon each year. You can support wind projects, 
                        methane digesters or other projects to balance that by spending around { offsetCost } on carbon offsets.</p> 
                    <a href="http://coolclimate.berkeley.edu/calculator">Calculate a more accurate carbon footprint</a>
                    <ul className="carbon-offset-list">
                    {Object.keys(this.props.carbonOffsetProviders).map(key=> (
                            <CarbonOffset key={key} details={this.props.carbonOffsetProviders[key]} />
                            ))}
                    </ul>
                </div>
                <button className="doMore" ref="DoMore" onClick="showWindowDoMore">I want to do more</button>
                <button className="share" ref="Share" onClick="showWindowDoMore">Share this</button>
                <button className="about" ref="About" onClick="showWindowAbout">About this Project</button>
            </div>

        )
    }
}

export default Action;