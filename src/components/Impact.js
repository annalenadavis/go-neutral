import React from 'react';

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
            <div className= "info-wrapper">
                <h3>Your Impact</h3>
                <div className="info-box">
                    <p>In { place } each { household } emits on average <span className = "amount">{ amount }</span> tons of carbon each year.</p> 
                </div>
            </div>

        );
    }

}

export default Impact;