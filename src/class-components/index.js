import User from "./users/User";
import React, { Component } from "react";

class Main extends Component {
    // * state in class Component
    constructor(props) {
        super(props);
        this.state = {
            users: [{ id: 1, name: "Reza" }],
        };
        // * render state
       /*  setTimeout(() => {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({
                users: [{ id: 1, name: "ali" }],
            });
        }, 1000); */
        this.code = 20
    }

    // * even handler
    clickHandle () {
        console.log("this click");
    }
    render() {
        return (
            <div>
                <User {...this.state.users[0]} />
                <br />
                <h2>{this.code}</h2>
                <button onClick={this.clickHandle}>click</button>
            </div>
        );
    }
}
export default Main;
