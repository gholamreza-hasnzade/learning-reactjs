import React, { Component } from "react";

class Rendring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 19,
        };
    }
    render() {
        return <div>{this.state.age > 20 ? "bozorg" : "nini"}</div>;
    }
}

export default Rendring;
