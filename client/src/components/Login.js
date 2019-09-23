import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) =>{
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    axiosWithAuth()
      .post('',credentials)
      .then(res =>{
        localStorage.setItem('token', res.data.payload)
        props.history.push('')      
      })
  }

  return(
    <div className="loginPage">
      <h1>Login</h1>
      
    </div>
  )
}