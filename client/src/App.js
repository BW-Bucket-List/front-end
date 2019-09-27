import React, {useState} from 'react';
import './scss/App.scss';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import CreateNewItem from "./components/CreateNewItem"
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
// import NavBar from './components/NavBar';
import BucketList from './components/BucketList';
import Items from './components/Items';

function App() {

  return (
    <div className="App">
      <div className='routes'>
        <Route exact path= '/' component={Login} />
        <Route path= '/login' component={Login} />
        <Route path= '/register' component={Register} />
        <PrivateRoute path= '/profile' component={ProfilePage} />
        <Route path='/bucket' component={BucketList} />
        <Route path= '/items' component={Items} />

        
        <Route path="/items/newitem" component={CreateNewItem} />
      </div>

    </div>
  );
}

export default App;