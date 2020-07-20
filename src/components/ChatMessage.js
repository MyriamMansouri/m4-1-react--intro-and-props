import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message, messageType }) => {
  console.log();
  return (
    <div
      className={
        `${messageType === 'sent' 
          ? "user-message"
          : "chat-message"} message`
      }
    >
      <img
        className="avatar"
        src={message.user.avatar}
        alt={message.user.username}
      />

      <div className="message-wrapper">
        <p className="name">{message.user.username}</p>
        <p className="body">{message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
