import React, { Component } from "react";

export class Method extends Component {
    render() {
        const { id, name, onRemove } = this.props;
        return (
            <div>
                <h3>
                    {name} <button onClick={() => onRemove(id)}>Remove</button>
                </h3>
            </div>
        );
    }
}

export default Method;

/* 
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
*/
