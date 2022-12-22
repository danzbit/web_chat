import React from 'react'

interface EnterUsernameProps  {
    username: string, setUsername: Function, handleConnection: Function
}

const EnterUsername: React.FC<EnterUsernameProps> = ({username, setUsername, handleConnection}) => {
  return (
    <form
          className="enter-username-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleConnection();
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username..."
            required={true}
          />
          <button type="submit">Submit</button>
        </form>
  )
}

export default EnterUsername