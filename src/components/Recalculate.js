import React, { useState } from 'react';
import PropTypes from "prop-types";

//TODO: Change zip PropTypes to number when have data

class Recalculate extends React.Component {
   
    static propTypes = {
        userDetails: PropTypes.shape({
            zip: PropTypes.string,
            household: PropTypes.string,
            emissions: PropTypes.number,
            reducedEmissions: PropTypes.number,
        }),
        updatedUserDetails: PropTypes.func,
    }

    handleZipChange = event => {
        let zip = event.target.value;
        if (zip.length === 5 || zip === "US") {
            const updatedUserDetails = { 
                ...this.props.userDetails,
                zip: zip,
            }
            this.props.updateUserDetails(updatedUserDetails);
        }
    }

    handleSelectChange = event => {
        const household = event.target.value;
        const updatedUserDetails = { 
            ...this.props.userDetails,
            household: household,
        }
        this.props.updateUserDetails(updatedUserDetails);
    }


    handleSubmit = event => {
        event.preventDefault();
        // const updatedUserDetails = { 
        //     ...this.props.userDetails,
        //     zip: zip, 
        //     household: household,
        //     emissions: emissions,
        //     reducedEmissions: reducedEmissions
        // }
        // this.props.updateUserDetails(updatedUserDetails);
    }

    render() {
        return(
            <div className="recalculate">
                <form className="recalculate-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="zip" defaultValue={this.props.userDetails.zip} onChange={this.handleZipChange}/>
                    <select type="text" name="household" defaultValue={this.props.userDetails.household} onChange={this.handleSelectChange}>
                        <option value="single">Just me</option>
                        <option value="house">Household</option>
                    </select>
                    {/* <button onClick={this.handleSubmit}>Update</button> */}
                </form>
            </div>         
        )
    }

}

export default Recalculate;