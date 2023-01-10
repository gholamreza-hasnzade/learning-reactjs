import Counter from "./counter/counter";
//import User from "./users/User";
import React, { Component } from "react";

class Main extends Component {
    // * state in class Component
    /*   constructor(props) {
        super(props);
        this.state = {
            users: [{ id: 1, name: "Reza" }],
            counter: 0,
        };
        
        // * render state
         setTimeout(() => {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({
                users: [{ id: 1, name: "ali" }],
            });
        }, 1000);

        // * bind in function
        //this.handleClick = this.handleClick.bind(this);
    } */

    // * even handler
    /*  handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    } */
    render() {
        return (
            <div>
                {/*  <User {...this.state.users[0]} />
                <br />
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleClick.bind(this)}>click</button> */}
                <Counter />
            </div>
        );
    }
}
export default Main;
