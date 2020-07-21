import React from "react";

import "./Header.css";
import Avatar from './Avatar'

const Header = ({ participants }) => {
  return (
    <header>
      {participants.map( participant => (
      <div className="avatar-wrapper">
        <Avatar avatar={participant.avatar} name={participant.name} size={50}/>
        <p className="name">{participant.username}</p>
      </div>
      ))}
    </header>
  );
};

export default Header;
