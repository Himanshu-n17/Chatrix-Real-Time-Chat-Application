import React from "react";
import { MessageSquare } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <MessageSquare color="#3b82f6" size={24} />
      <h1 className="chat-title">Live Chat</h1>
      <div className="connection-status">
        <div className="status-indicator status-online"></div>
        <span>Connected</span>
      </div>
    </div>
  );
};

export default ChatHeader;
