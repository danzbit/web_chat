import React from 'react'

interface UserProps {
    user: {id: string; username: string}
}

const User: React.FC<UserProps> = ({user}) => {
  return (
    <li className='connected-user'>
        <img src="/assets/user.png" alt="Unknow user" />
        <span>{user.username}</span>
    </li>
  )
}

export default User
