import React, {useState, useEffect} from 'react';
import './App.scss';
import {Route, Link} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <div className='routes'>
        <Route exact path= '/' component={Login} />
        <Route path= '/login' component={Login} />
        <Route path= '/register' component={Register} />
        <Route path= '/profile' component={ProfilePage} />

      </div>

    </div>
  );
}

export default App;
