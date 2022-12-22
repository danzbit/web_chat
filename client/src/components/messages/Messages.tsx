import React from "react";
import Message from "./Message";

interface MessagesProps {
  messages: { message: string; username: string }[];
  username: string;
  handleSendMessage: Function;
  setMessage: Function;
  message: string;
}

const Messages: React.FC<MessagesProps> = ({
  messages,
  username,
  handleSendMessage,
  setMessage,
  message,
}) => {
  return (
    <div className="messages">
            <ul className="message-list scrollable">
                {messages.map((message, i) => (
                    <Message key={i + message.username} message={message} username={username} />
                ))}
            </ul>

            <form onSubmit={e => {
                e.preventDefault()
                handleSendMessage();
            }}>
                <input 
                    type="text" 
                    placeholder="Type your message..." 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    required={true}
                />
                <button type="submit">Send</button>
            </form>
        </div>
  );
};

export default Messages;
