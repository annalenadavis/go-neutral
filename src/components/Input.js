import React from 'react';

class Input extends React.Component {

    render() {
        return(
            <div>
                <h2>Just answer these questions:</h2>
                <input type="text" name="zip"/>
                <select type="text" name="household">
                    <option value="one">Just me!</option>
                    <option value="household">My household</option>
                </select>
                <input type="text" name="householdSize"/>
            </div>

        )
    }

}

export default Input;