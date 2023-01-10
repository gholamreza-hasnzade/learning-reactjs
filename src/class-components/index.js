import User from "./users/User";
import React, { Component } from "react";

class Main extends Component {
    // * state in class Component
    constructor(props) {
        super(props);
        this.state = {
            users: [{ id: 1, name: "Reza" }],
        };
        this.code = 20
        // * render state
       /*  setTimeout(() => {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({
                users: [{ id: 1, name: "ali" }],
            });
        }, 1000); */

        // * bind in function
        this.handleClick = this.handleClick.bind(this);
    }

    // * even handler
    handleClick () {
        console.log("this click");
    }
    render() {
        return (
            <div>
                <User {...this.state.users[0]} />
                <br />
                <h2>{this.code}</h2>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}
export default Main;
