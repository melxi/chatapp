import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const JoinPage = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Get name from localStorage and save to state
    const savedName = window.localStorage.getItem('name') || '';
    setName(savedName)
  }, [])

  const handleSubmit = (e) => {
    // Save name to localStorage and redirect to chat page
    e.preventDefault();
    window.localStorage.setItem('name', name);
    history.push('/chat');
  }

  return (
    <main>
      <form className="join-chat-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          id="name"
          required
          placeholder="Enter your name"
          value={name} 
          onChange={({ target }) => setName(target.value)}
        />
        <button type="submit" disabled={!name}>Join</button>
      </form>
    </main>
  )
}

export default JoinPage;