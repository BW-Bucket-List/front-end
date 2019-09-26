import React, {useState, useEffect} from 'react';
import './scss/App.scss';
import {Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import CreateNewItem from "./components/CreateNewItem"
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
import NavBar from './components/NavBar';
import BucketList from './components/BucketList';
import Items from './components/Items';

const sharedTestData = [
  {bucket_list_id: 1,
   bucket_list_name: 'Games to Play',
   private: 0,
   items: [
     {
      item_id : 1,
      bucket_list_item_name: 'Purchase console',
      bucket_list_item_journal: 'https://bla.com',
      bucket_list_item_voice: null,
      bucket_list_item_photo: null
     }
   ]},
   {bucket_list_id: 2,
   bucket_list_name: 'Travel to spain',
   private: 0,
   items: [
    {
     item_id : 1,
     bucket_list_item_name: 'Purchase tickets',
     bucket_list_item_journal: 'https://bla.com',
     bucket_list_item_voice: null,
     bucket_list_item_photo: null
    },
    {
      item_id : 2,
      bucket_list_item_name: 'Book hotel',
      bucket_list_item_journal: 'https://bla.com',
      bucket_list_item_voice: null,
      bucket_list_item_photo: null
     }
  ]}
]

const privateTestData = [
  {bucket_list_id: 1,
   bucket_list_name: 'Read 10 books',
   private: 1,
   items: [
     {
      item_id : 1,
      bucket_list_item_name: 'Research books',
      bucket_list_item_journal: 'https://bla.com',
      bucket_list_item_voice: null,
      bucket_list_item_photo: null
     }
   ]}
  ]

function App() {

  const [sharedBucketLists, setSharedBucketLists] = useState(sharedTestData)
  const [privateBucketLists, setPrivateBucketLists] = useState(privateTestData)
  const [serverError, setServerError] = useState('')

  return (
    <div className="App">
      <div className='routes'>
        <Route exact path= '/' component={Login} />
        <Route path= '/login' component={Login} />
        <Route path= '/register' component={Register} />
        <PrivateRoute path= '/profile' component={ProfilePage} />
        <Route path= '/buckets' render={props => {
          return (
            <BucketList {...props} 
            sharedBucketLists={sharedBucketLists}
            setSharedBucketLists={setSharedBucketLists}
            privateBucketLists={privateBucketLists}
            setPrivateBucketLists={setPrivateBucketLists}
            setServerError={setServerError}/>
          )
        }}/>
        <Route path= '/items' render={props => {
          return (
            <Items {...props} 
            items={sharedTestData[1].items}
            />
          )
        }}/>
        
        <Route path="/items/newitem" component={CreateNewItem} />
      </div>

    </div>
  );
}

export default App;