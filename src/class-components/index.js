import React, { Component } from "react";
import AddForm from "./book/addForm";
import Header from "./book/header";
//import {FiUsers} from "react-icons/fi"

//import FormValdtion from "./form-valdtion";
//import GuizeApp from "./quize-app";
//import Ticket from "./ticket";
//import Method from "./method";
//import Rendring from "./rendring/rendring";
//import Form from "./from/Form";
//import Notification from "./notification/notification";
//import Params from "./params/params";
//import Temp from "./temp/temp";
//import Counter from "./counter/counter";
//import User from "./users/User";

class Main extends Component {
    render() {
        return (
            <div className="container mt-4">
                <Header />
                <AddForm />
            </div>
        );
    }
}
export default Main;
