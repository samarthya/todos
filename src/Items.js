import React from 'react';

class Items extends React.Component {
    render() {
        return (
            <li>
                <label>
                    <input onClick={this.props.clickHandler} type="checkbox" checked={this.props.done || false} />
                    <span>{this.props.text}</span>
                </label>
            </li>
        )
    }
}

export default Items;