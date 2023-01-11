import React, { Component } from "react";
import Rendring from "./rendring/rendring";
//import Notification from "./notification/notification";
//import Params from "./params/params";
//import Temp from "./temp/temp";
//import Counter from "./counter/counter";
import User from "./users/User";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: 1, name: "reza" },
                { id: 2, name: "mmad" },
                { id: 3, name: "ali" },
            ],
        };
    }
    render() {
        return (
            <>
                {this.state.users.map((user) => (
                    <User user={user} key={user.id} />
                ))}
            </>
        );
    }
}
export default Main;
