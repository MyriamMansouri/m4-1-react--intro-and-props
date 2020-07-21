import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

const App = ({ conversation, currentUser }) => {
  return (
    <div className="wrapper">
      <Header participants={conversation.participants.filter(user => user.username !== currentUser.username)}/>
      <ChatStream messages={conversation.messages} currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default App;
