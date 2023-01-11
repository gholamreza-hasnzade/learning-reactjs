import React from 'react'

//*  props in read Only
const User = ({user}) => {
  return (
    <div>
      <ul>
        <li>{user.name}</li>
      </ul>
    </div>
  )
}

export default User