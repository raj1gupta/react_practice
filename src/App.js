import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
function App() {
  return (
   <div>
    <h2>User Profile</h2>
    <UserCard name="Raj gupta" age={20} location="Pratapgarh UP" />
   </div>
  );
}

export default App;
