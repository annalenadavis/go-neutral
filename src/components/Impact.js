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
            place = "the U.S."
        };
        //connect with database with footprints by zip
        // else {
        //     place = "your zip code";
        // };
        
        return(
            <div>
                <p>In { place } each { household } emits around { amount } tons of carbon each year.</p> 
                <p>This comes from flying and driving, heating and cooling our homes, the food and items we buy, and more.</p>
                <h1>Visual here</h1>
                <p>Your energy comes from hydro, nuclear, oil, gas, coal, etc</p>
                <h1>Bar Chart here</h1>
            </div>

        );
    }

}

export default Impact;