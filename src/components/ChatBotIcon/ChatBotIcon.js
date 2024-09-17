// src/components/ChatBotIcon.js
import React, { useState } from "react";
import "./ChatBotIcon.css"; // Import CSS for the icon

const ChatBotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div
        className={`chatbot-icon ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C7.03 3 3 7.03 3 12c0 3.65 2.82 6.68 6.5 7.7v2.3l3.5-2.5 3.5 2.5v-2.3C18.18 18.68 21 15.65 21 12c0-4.97-4.03-9-9-9zM12 14.5c-1.16 0-2.1-.94-2.1-2.1 0-1.16.94-2.1 2.1-2.1 1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1zm0-4c-.76 0-1.4.64-1.4 1.4s.64 1.4 1.4 1.4 1.4-.64 1.4-1.4-.64-1.4-1.4-1.4zm0 7.6c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7z"
            fill="#ffffff"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Chat with us!</h4>
            <button onClick={toggleChat} className="close-btn">
              x
            </button>
          </div>
          <div className="chatbot-body">
            {/* Chatbot functionality would be integrated here */}
            <p>Chatbot is currently under construction.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotIcon;
