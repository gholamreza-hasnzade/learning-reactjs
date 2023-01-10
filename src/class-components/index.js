import User from "./users/User";
import React, { Component } from "react";

class Main extends Component {
    // * state in class Component
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: "Reza" },
                { id: 2, name: "MMad" },
            ],
        };
    }

    render() {
        return <User {...this.state.users[0]} />;
    }
}
export default Main;
