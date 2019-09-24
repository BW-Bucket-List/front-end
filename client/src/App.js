import React from 'react';
import './App.scss';
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Login /> */}
      <Register />
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;
