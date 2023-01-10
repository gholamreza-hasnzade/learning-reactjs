import React, { Component } from "react";

class Params extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React js",
        };
    }
    clickHandler(num1, num2) {
        console.log(num1 + num2);
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <button onClick={this.clickHandler.bind(this, 2, 5)}>
                    click
                </button> */}
                <button onClick={() => this.clickHandler(5, 5)}>click</button>
            </div>
        );
    }
}

export default Params;
