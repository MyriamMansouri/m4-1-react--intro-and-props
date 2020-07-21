import React from "react";
import Avatar from './Avatar'
import './ReceivedMessage.css'


const ReceivedMessage = ({message}) => {
  return (
    <div className="chat-message">
      <Avatar avatar={message.user.avatar} name={message.user.name} size={25} />
      <div >
        <p className="name">{message.user.username}</p>
        <img className="tip-received" src="/assets/tip-received.svg" alt="tip-received" />
        <p className="body">{message.body}</p>

      </div>
    </div>
  );
};

export default ReceivedMessage;