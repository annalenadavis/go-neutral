import React from 'react';

class CarbonOffset extends React.Component {

    render() {
        let { provider, website, description } = this.props.details;
        
        return (
            <li className="single-offset">
                <a target="_blank" href={ website }>{ provider }</a>
                <p>{ description }</p>
            </li>
        );
    }
}

export default CarbonOffset;