import React from 'react';

class Renewable extends React.Component {

    //TODO:Edit this function so that certificate shows
    showNote = () => {
        let type = this.props.details.type;
        const typeText = this.refs.typeText;
        if (type === "Certificate") {
            typeText.setAttribute("className", "active")
        }
    }

    render() {
        let { provider, website, product, type } = this.props.details;

        
        return (
            <li className="single-renewable">
                <a target="_blank" href={ website }>{ provider }</a>
                <p className="hidden" ref="typeText">({ type } only)</p>
                <p>Look for program called { product }</p>
            </li>
        );
    }
}

export default Renewable;

