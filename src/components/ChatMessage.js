import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message, currentUser }) => {
  console.log();
  return (
    <div
      className={
        `${message.user.username === currentUser.username
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
