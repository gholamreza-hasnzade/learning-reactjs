import React, { Component } from "react";

export default class ColorBox extends Component {
    render() {
        const { color, onBackground } = this.props;
        return (
            <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={() => onBackground(color)}
            ></div>
        );
    }
}
