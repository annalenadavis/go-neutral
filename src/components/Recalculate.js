import React from 'react';

class Recalculate extends React.Component {
    zipRef = React.createRef();
    householdRef = React.createRef();
    
    
    handleSubmit = event => {
        event.preventDefault();
        const zip = this.zipRef.value.value || this.props.userDetails.zip;
        const household = this.householdRef.value.value;
        let emissions;
        let reducedEmissions;
        if (household === "household") {
                emissions = 48.5;
                reducedEmissions = 42;
            } else {
                emissions = 28.2;
                reducedEmissions = 24;
            };

        const updatedUserDetails = { 
            ...this.props.userDetails,
            zip: zip, 
            household: household,
            emissions: emissions,
            reducedEmissions: reducedEmissions
        }
        this.props.updateUserDetails(updatedUserDetails);
    }

    render() {
        return(
            <div className="recalculate">
                <form className="recalculate-form">
                    <input type="text" name="zip" ref={this.zipRef} placeholder={this.props.userDetails.zip}/>
                    <select type="text" name="household" ref={this.householdRef}>
                        <option value="single">Just me</option>
                        <option value="household">Household</option>
                    </select>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>

        )
    }

}

export default Recalculate;