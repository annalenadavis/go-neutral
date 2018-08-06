import React from 'react';

class Impact extends React.Component {
//TODO: Pie Chart? Or graphics showing what we do that emits carbon
//TODO: Combine two EPA databases to show where energy comes from (coal, wind, etc)
//TODO: add labels and adjust layout of  Recalulate component

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
            place = "your zip code"
        };
        //connect with database with footprints by zip
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