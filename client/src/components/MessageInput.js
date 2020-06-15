import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MessageInput = ({ messages, setMessages }) => {
  const [content, setContent] = useState('');
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get message sender's name from localStorage
    const name = window.localStorage.getItem('name');

    // Go back to join page if name not found in localStorage
    if (!name) {
      history.push('/');
    }

    // Prevent submitting if name or content not defined
    if (!name || !content) return;

    const response = await fetch('/api/messages', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, content})
    })
  
    const message = await response.json();

    setMessages([...messages, message]);
    setContent('');
  }

  return (
    <div className="send-message-form">
      <form onSubmit={handleSubmit}>
        <textarea 
          type="text" 
          maxLength="500"
          value={content}
          placeholder="Type your message here..."
          onChange={({ target }) => setContent(target.value)}
        >
        </textarea>
        <button type="submit" disabled={!content}>Send</button>
      </form>
    </div>
  )
}

export default MessageInput;
