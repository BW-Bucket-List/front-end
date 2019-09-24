import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import LoginPic from '../Images/LoginPic.jpg';

const Register = (props) =>{
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
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
      <h1>Register</h1>
      <div className='mainContent'>
        <div className='leftContent'>
          <form onSubmit={handleSubmit} className="loginForm">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={credentials.name}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={credentials.email}
              placeholder="Email"
            />
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
            <button>Register</button>
          </form>
          <p>Already have an account?{' '}<Link to='' className='link'>click here!</Link></p>
        </div>
        <div className='rightContent'>
          <img src={LoginPic} alt='Assorted items on a wooden table' className='loginPageImg' />
        </div>
      </div>
    </div>
  )
}

export default Register;