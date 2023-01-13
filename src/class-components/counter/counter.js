import React, { Component } from "react";

export class Counter extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    addConter() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    lowerCounter() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <p>{counter}</p>
                <div>
                    <button onClick={this.addConter.bind(this)}>
                        add count
                    </button>
                    <button onClick={this.lowerCounter.bind(this)}>
                        lower count
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
