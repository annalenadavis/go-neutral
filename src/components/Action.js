import React from 'react';
import Renewable from './Renewable.js';

class Action extends React.Component {

//TODO: Add renewables list from JSON file- start with adding all, later add by state (based on zip)
//TODO: helpful-hints list for Buying Carbon Offsets
//TODO: List of places to buy carbon offsets. Repeat their likely footprint and give estimate of cost depending on company
//TODO: Add: "Do More" and "Share" buttons
//TODO: STYLE

setActive = () => {
    const hints = this.refs.Hints;
    hints.classList.toggle("active");
}

    render() {
        return(
            <div>
                <h1>Make an impact today</h1>
                <div className="renewable">
                    <h3>Get Renewable Energy</h3>
                    <h4 className="list-toggle" onClick={this.setActive}>Helpful Hints</h4>
                    <ol className="helpful-hints collapse" ref="Hints">
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
                <p>Buy Carbon credits here...</p>   
            </div>

        )
    }

}

export default Action;