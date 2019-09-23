import React from 'react';
import './App.css';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfilePage />
    </div>
  );
}

export default App;
