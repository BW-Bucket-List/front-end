import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import LoginPic from '../Images/LoginPic.jpg';

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
      <div className='mainContent'>
        <div className='leftContent'>
          <form onSubmit={handleSubmit} className="loginForm">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={credentials.username}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={credentials.password}
              placeholder="Password"
            />
            <button>Login</button>
          </form>
          <p>Don't have an account?{' '}<Link to=''>click here!</Link></p>
        </div>
        <div className='rightContent'>
          <img src={LoginPic} alt="Assorted items on wooden table" className="loginPageImg"/>
        </div>
      </div>
    </div>
  )
}

export default Login;