import React from 'react';
import CarbonOffset from './CarbonOffset.js';
import earth from '../css/images/earth.png';
import step2stamp from '../css/images/step2stamp.png';


class GoNeutral extends React.Component {

showCarbonOffsets = () => {
    const offsetProviders = this.refs.offsetProviders;
    offsetProviders.classList.toggle("active");
}

    render() {

        const reducedEmissions = this.props.userDetails.reducedEmissions;

        const tonsToPounds = (reducedEmissions) => {
            return Math.round(reducedEmissions/2);
        }

        const offsetCost = (reducedEmissions) => {
            const low = (reducedEmissions*5.5);
            const high = (reducedEmissions*13);
            return(`$${low} to $${high}`);
        }

        return(
                <div className="info-wrapper right-wrapper">
                    <img src={ earth } className="icon"/>
                    <h3>Go Carbon Neutral</h3>
                    <div className="info-box">
                        <ol className="helpful-hints">
                            <li><p>Your actions emit carbon. It happens. But you can support projects that <span>reduce</span> emissions somewhere else!</p></li>
                            <li><p>Like methane digesters, clean cookstoves, wind farms, and other projects in the US or in developing countries.</p></li>
                            <li><p>After switching to renewable energy, you need to offset around <span className="emissions">{ reducedEmissions }</span> tons of Carbon</p>
                            <p>(or { tonsToPounds(reducedEmissions)} thousand pounds)</p></li>
                            <li><p>This may cost { offsetCost(reducedEmissions) } for one year of your emissions.</p></li>
                        </ol>
                        <a href="http://coolclimate.berkeley.edu/calculator">(Or calculate your exact footprint)</a>
                        <h4 className="list-toggle" onClick={this.showCarbonOffsets}> + Get Carbon Offsets + </h4>
                        <ul className="provider-list" ref="offsetProviders">
                            {Object.keys(this.props.carbonOffsetProviders).map(key=> (
                                <CarbonOffset key={key} details={this.props.carbonOffsetProviders[key]}  />
                            ))}
                        </ul>
                        <img src = { step2stamp } className="stamp stamp2" />
                    </div>
                </div>

        )
    }
}

export default GoNeutral;