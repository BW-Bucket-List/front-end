import React from 'react';
// import './App.scss';
import Login from './Components/Login';
import Register from './Components/Register';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Register /> */}
      <NavBar /> 
      <ProfilePage />
      <Footer />
    </div>
  );
}

export default App;