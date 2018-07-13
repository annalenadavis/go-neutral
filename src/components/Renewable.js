import React from 'react';

class Renewable extends React.Component {

    // TODO: Finish rendering renewable providers
    render() {
        const { available, provider, type, website } = this.props.details;

        
        return (
            <li className="single-renewable">
                <p>{ provider }</p>
                <p>{ website }</p>
            </li>
        );
    }
}

export default Renewable;

