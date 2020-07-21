import React from "react";

import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const ChatMessage = ({ message, messageType }) => {
  if (messageType === 'sent') {
    return <SentMessage message={message} />;
  } else {
    return <ReceivedMessage message={message} />;
  }
};

export default ChatMessage;
