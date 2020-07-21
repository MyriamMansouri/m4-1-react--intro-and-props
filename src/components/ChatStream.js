import React from "react";

import "./ChatStream.css";
import ChatMessage from "./ChatMessage";


const ChatStream = ({ messages, currentUser }) => {
  return messages.map((message) => (
    <ChatMessage
      key={message.id}
      className="chat-stream"
      message={message}
      messageType={currentUser.username === message.user.username ? 'sent' : 'received'}
    />
  ));
};

export default ChatStream;
