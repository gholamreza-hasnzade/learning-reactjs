import React from 'react'

//*  props in read Only
const User = ({user}) => {
  /* 
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

     {this.state.users.map((user) => (
                    <User user={user} key={user.id} />
                ))}
  */
  return (
    <div>
      <ul>
        <li>{user.name}</li>
      </ul>
    </div>
  )
}

export default User