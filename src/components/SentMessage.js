import React from "react";

import './SentMessage.css'

const SentMessage = ({message}) => {
  return (
    <div className="user-message">
      <div className="user-message">

        <p className="body">{message.body}</p>
        <img className="tip-sent" src="/assets/tip-sent.svg" alt="tip-sent" />
      </div>
    </div>
  );
};

export default SentMessage;