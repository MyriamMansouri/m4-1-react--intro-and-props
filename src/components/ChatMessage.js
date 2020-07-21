import React from "react";
import "./ChatMessage.css";
import Avatar from './Avatar'

const ChatMessage = ({ message, messageType }) => {
  return (
    <div
      className={`${
        messageType === "sent" ? "user-message" : "chat-message"
      } message`}
    >
      <Avatar avatar={message.user.avatar} name={message.user.name} size={25} />
      <div className="message-wrapper">
        <p className="name">{message.user.username}</p>
        <p className="body">{message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
