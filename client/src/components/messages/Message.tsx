import React from "react";
import Moment from "react-moment";

interface MessageProps {
  message: { message: string; username: string };
  username: string;
}

const Message: React.FC<MessageProps> = ({ message, username }) => {
  const messagedRecieved = message.username !== username;
  return (
    <li className={messagedRecieved ? "message received" : "message sended"}>
      <div className="message-info">
        <span>{message.username}</span>{" "}
        <Moment format="MM/DD/YYYY h:mm:ss">{Date.now()}</Moment>
      </div>

      <p>{message.message}</p>
    </li>
  );
};

export default Message;
