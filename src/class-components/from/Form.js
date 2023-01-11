import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
        };
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    };
    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <p>{this.state.username}</p>
            </form>
        );
    }
}

export default Form;
