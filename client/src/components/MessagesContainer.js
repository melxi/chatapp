import React, { useEffect, useRef } from 'react';
import moment from 'moment';

const MessagesContainer = ({ messages }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Scroll to the last message
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight;
      const height = scrollRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      
      scrollRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }, [messages])

  return (
    <div className="chat-area">
      <ul ref={scrollRef}>
        {messages.map(message => (
          <li key={message._id}>
            <span className="name">{message.name}</span><small>{moment(message.createdAt).format('LT')}</small>
            <p className="content">{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MessagesContainer;