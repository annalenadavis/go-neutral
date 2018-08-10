import React from 'react';
import footprint from '../css/images/footprint.png';
import plane from '../css/images/plane.png';
import car from '../css/images/car.png';
import house from '../css/images/house.png';
import shopping from '../css/images/shopping.png';

class Impact extends React.Component {

    render() {
        let household;
        let place;
        let amount;

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
        //once connected with database with footprints by zip change to:
        // else {
        //     place = "your zip code";
        // };
        
        return(
            <div className= "info-wrapper left-wrapper">
                <img src={ footprint } className="icon"/><h3>Your Impact</h3>
                <div className="info-box">
                    <p>In { place } each { household } emits on average <span className = "amount">{ amount }</span> tons of carbon each year.
                    This includes emissions from flying, driving, heating & cooling our homes, and the food and other stuff we buy.</p> 
                    <img src={ plane } className="icon"/>
                    <img src={ car } className="icon"/>
                    <img src={ house } className="icon"/>
                    <img src={ shopping } className="icon"/>
                </div>
                <a href="https://coolclimate.berkeley.edu/calculator">Emissions estimate from the Cool Climate Network</a>
            </div>

        );
    }

}

export default Impact;