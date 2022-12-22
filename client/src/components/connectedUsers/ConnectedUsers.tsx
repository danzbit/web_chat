import React from 'react'
import User from './User';

interface ConnectedUsersProps {
    connectedUsers: {id: string; username: string}[]
}

const ConnectedUsers: React.FC<ConnectedUsersProps> = ({connectedUsers}) => {
  return (
    <div className="connected-users">
        <h2>Connected Users</h2>

        <ul>
            {connectedUsers.map(user => (
                <User key={user.id} user={user}/>
            ))}
        </ul>
    </div>
  )
}

export default ConnectedUsers
