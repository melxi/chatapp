import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatPage from './components/ChatPage';
import JoinPage from './components/JoinPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={JoinPage} />
        <Route path="/chat" component={ChatPage}/>
      </div>
    </Router>
  );
}

export default App;