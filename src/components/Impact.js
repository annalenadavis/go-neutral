import React from 'react';
import footprint from '../css/images/footprint.png';
import plane from '../css/images/plane-b.png';
import car from '../css/images/car-b2.png';
import house from '../css/images/house-b.png';
import shopping from '../css/images/shopping-b.png';

class Impact extends React.Component {

    render() {
        let houseDescription;
        let place;
        const emissions = this.props.userDetails.emissions;

        if (this.props.userDetails.household === "household") {
            houseDescription = "household";
        } else {
            houseDescription = "person"
        };

        if (this.props.userDetails.zip === "US") {
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
                <div className="info-box-title-bar">
                    <img src={ footprint } className="icon" alt=""/>
                    <h3>Your Impact</h3>
                </div>
                <div className="info-box">
                    <p>In { place } each { houseDescription } emits on average <span className = "emissions">{ emissions }</span> tons of carbon each year.
                    This includes emissions from flying, driving, heating & cooling our homes, and the food and other stuff we buy.</p> 
                    <img src={ plane } className="icon" alt=""/>
                    <img src={ car } className="icon" alt=""/>
                    <img src={ house } className="icon" alt=""/>
                    <img src={ shopping } className="icon" alt=""/>
                </div>
                <div className="info-link-wrapper">
                    <a className ="info-link" target="_blank" href="https://coolclimate.berkeley.edu/calculator">Emissions estimate from the Cool Climate Network</a>
                </div>
            </div>

        );
    }

}

export default Impact;