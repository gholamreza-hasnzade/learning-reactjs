import React, { Component } from "react";
//import FormValdtion from "./form-valdtion";
//import GuizeApp from "./quize-app";
//import Ticket from "./ticket";
import Method from "./method";
//import Rendring from "./rendring/rendring";
//import Form from "./from/Form";
//import Notification from "./notification/notification";
//import Params from "./params/params";
//import Temp from "./temp/temp";
//import Counter from "./counter/counter";
//import User from "./users/User";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: 1, name: "Reza" },
                { id: 2, name: "Mammd" },
                { id: 3, name: "jafar" },
            ],
        };
    }
    userRemverHandler = (userId) => {
        let newUsers = [...this.state.users];
        let mainUserInedex = newUsers.findIndex((user) => user.id === userId);
        newUsers.splice(mainUserInedex, 1);
        this.setState({
            users: newUsers,
        });
    };
    render() {
        const { users } = this.state;
        return (
            <div>
                {users.map((user) => (
                    <Method
                        key={user.id}
                        {...user}
                        onRemove={this.userRemverHandler}
                    />
                ))}
            </div>
        );
    }
}
export default Main;
