import React from 'react';
import CarbonOffset from './CarbonOffset.js';

class GoNetural extends React.Component {

showCarbonOffsets = () => {
    const offsetProviders = this.refs.offsetProviders;
    offsetProviders.classList.toggle("active");
}
//TODO: Add offsetCost to description in component
//TODO: Convert tons to 1,000 pounds and add to description since some providers charge by 1,000 pounds

    render() {

        let amount;
        let offsetCost = `{amount}*12 - {amount}*20`;

        if (this.props.options.household === "household") {
            amount = "48.5";
        } else {
            amount = "28.2"
        };

        return(
                <div className="info-wrapper">
                    <h3>Go Carbon Neutral</h3>
                    <div className="info-box">
                        <ol className="helpful-hints">
                            <li><p>Your actions emit carbon. It happens. But you can support projects that <span>reduce</span> emissions somewhere else!</p></li>
                            <li><p>Like methane digesters, clean cookstoves, wind farms, and other projects in the US or in developing countries.</p></li>
                            <li><p>Buy offsets to balance the <span className="amount">{ amount }</span> tons of Carbon you emit</p></li>
                        </ol>
                        <a href="http://coolclimate.berkeley.edu/calculator">(Or calculate your exact footprint)</a>
                        <h4 className="list-toggle" onClick={this.showCarbonOffsets}> + Get Carbon Offsets + </h4>
                        <ul className="provider-list" ref="offsetProviders">
                            {Object.keys(this.props.carbonOffsetProviders).map(key=> (
                                <CarbonOffset key={key} details={this.props.carbonOffsetProviders[key]} />
                            ))}
                        </ul>
                    </div>
                </div>

        )
    }
}

export default GoNetural;