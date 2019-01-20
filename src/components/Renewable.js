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
                <div class="list-title">
                    <a target="_blank" href={ website }>{ provider }</a>
                </div>
                <div class="list-details">
                    <p className="hidden" ref="typeText">({ type } only)</p>
                    <p>Program: { product }</p>
                </div>
            </li>
        );
    }
}

export default Renewable;

