import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './components/Users';
function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
