import React, { Component } from "react";

export default class Note extends Component {
    render() {
        const { color, title, onRemove, id } = this.props;
        return (
            <div
                className="card shadow-sm rounded "
                style={{ backgroundColor: color }}
                onClick={() => onRemove(id)}
            >
                <p className="card-text p-3">{title}</p>
            </div>
        );
    }
}
