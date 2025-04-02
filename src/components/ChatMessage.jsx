import React from "react";

const ChatMessage = ({ message, isOwnMessage }) => {
  return (
    <div className={`message ${isOwnMessage ? "own-message" : ""}`}>
      <div className="message-content">
        <div className="message-sender">{message.sender}</div>
        <p className="message-text">{message.text}</p>
        <div className="message-timestamp">{message.timestamp}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
