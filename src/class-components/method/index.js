import React, { Component } from "react";

export class Method extends Component {
    render() {
        const { id, name, onRemove } = this.props;
        return (
            <div>
                <h3>
                    {name} <button onClick={() => onRemove(id)}>Remove</button>
                </h3>
            </div>
        );
    }
}

export default Method;
