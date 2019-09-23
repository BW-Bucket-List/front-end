import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Route exact path='/' component={ProfilePage} />
      {/* <Route exact path='/bucket-list' component={BucketList} />
      <Route exact path='/about' component={AboutPage} /> */}
    </Router>
    </div>
  );
}

export default App;
