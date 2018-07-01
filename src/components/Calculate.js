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
                    <input type="text" name="zip" ref={this.zipRef} placeholder="My Zip Code"/>
                    <select type="text" name="household" ref={this.householdRef}>
                        <option value="one">Just me</option>
                        <option value="two">2 of us</option>
                        <option value="three">3 of us</option>
                        <option value="four">4 of us</option>
                        <option value="five">5 or more</option>
                    </select>
                </form>
        )
    }

}

export default Calculate;