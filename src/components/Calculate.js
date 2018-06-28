import React from 'react';

class Calculate extends React.Component {
    zipRef = React.createRef();
    householdRef = React.createRef();
    householdSizeRef = React.createRef();

      calculateFootprint = event => {
        event.preventDefault();
        const footprintFactors = {
            zip: this.zipRef.value.value,
            household: this.householdRef.value.value,
            householdSize: parseFloat(this.householdSizeRef.value.value)
        } 
        this.props.updateFootprint(footprintFactors);
      }

    render() {
        return (
                <form className="calculate-form" onSubmit={this.calculateFootprint}>
                    <h3>Estimate my Footprint</h3>
                    <input type="text" name="zip" ref={this.zipRef} placeholder="Zip Code"/>
                    <select type="text" name="household" ref={this.householdRef}>
                        <option value="one">Just me</option>
                        <option value="household">My household</option>
                    </select>
                    <input type="text" name="householdSize" ref={this.householdSizeRef} placeholder="# in household"/>
                    <button type="submit">Show me</button> 
                </form>
        )
    }

}

export default Calculate;