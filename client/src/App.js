import React, {useState, useEffect} from 'react';
import './App.scss';
import {Route, Link} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NavBar from './components/NavBar/NavBar';
import BucketList from './components/BucketList';

const testdata = [
  {id: '1',
   name: 'series',
   isPrivate: true,
   items: ['a','b','c']},
   {id: '2',
   name: 'movies',
   isPrivate: true,
   items: ['d','e','f']}
]

function App() {

  const [bucketLists, setBucketLists] = useState(testdata)
  const [serverError, setServerError] = useState('')

  return (
    <div className="App">
      <div className='routes'>
        <Route path= '/' component={NavBar} />
        {serverError}
        <Route exact path= '/' component={Login} />
        <Route path= '/login' component={Login} />
        <Route path= '/register' component={Register} />
        <Route path= '/profile' component={ProfilePage} />
        <Route path= '/buckets' render={props => {
          return (
            <BucketList {...props} 
            bucketLists={bucketLists}
            setBucketLists={setBucketLists}
            setServerError={setServerError}/>
          )
        }}/>

      </div>

    </div>
  );
}

export default App;
