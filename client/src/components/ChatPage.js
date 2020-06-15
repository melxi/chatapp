import React, { useEffect, useState } from 'react';
import MessagesContainer from './MessagesContainer';
import MessageInput from './MessageInput';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Get all messages from database
    async function fetchMessages() {
      const response = await fetch('/api/messages');
      const messages = await response.json();

      setMessages(messages);
    }

    fetchMessages();
  }, [])


  return (
    <div className="chat-page">
      <MessagesContainer messages={messages}/>
      <MessageInput messages={messages} setMessages={setMessages}/>
    </div>
  )
}

export default ChatPage;