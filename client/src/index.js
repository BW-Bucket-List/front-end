import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
//import {createStore, applyMiddleware} from 'redux';
import './scss/App.scss';
//import {Provider} from 'react-redux';
//import thunk from 'redux-thunk';
//import {reducer} from './reducers';


//const store = createStore(reducer, (applyMiddleware(thunk)));


ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <NavBar />
      <App />
      <Footer />
    </Router>
  // </Provider>
  ,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
