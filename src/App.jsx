import React from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import Sidebar from "./components/Sidebar";
import useWebSocket from "./hooks/useWebSocket";

function App() {
  const { messages, sendMessage } = useWebSocket();

  return (
    <div className="app-container">
      <div className="chat-container">
        <Sidebar />
        <div className="chat-main">
          <ChatHeader />
          <div className="messages-container">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                isOwnMessage={message.sender === "You"}
              />
            ))}
          </div>
          <ChatInput onSendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
