import React from 'react';

class Recalculate extends React.Component {
    zipRef = React.createRef();
    householdRef = React.createRef();
    
    
    handleSubmit = event => {
        event.preventDefault();
        const zip = this.zipRef.value.value || this.props.options.zip;
        const household = this.householdRef.value.value;
        const updatedOptions = { 
            ...this.props.options,
            zip: zip, 
            household: household }
        this.props.updateOptions(updatedOptions);
    }

    render() {
        return(
            <div className="recalculate">
                <form className="recalculate-form">
                    <input type="text" name="zip" ref={this.zipRef} placeholder={this.props.options.zip}/>
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