import React from 'react'

//*  props in read Only
const User = ({name}) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
      </ul>
    </div>
  )
}

export default User