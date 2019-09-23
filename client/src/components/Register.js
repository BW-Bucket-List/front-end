import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';

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
    <div className="registerPage">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="registerForm">
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
      <p>Already have an account?{' '}<Link to=''>click here!</Link></p>
    </div>
  )
}

export default Register;