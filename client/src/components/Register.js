import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import LoginPic from '../Images/LoginPic.jpg';
import {connect} from 'react-redux';
import {registerUser} from '../actions';

const Register = (props) =>{
  const [credentials, setCredentials] = useState({
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
    props.registerUser(credentials);
    props.history.push('')
  }

  return(
    <div className="loginPage">
      <h1>Welcome to Bucket List!</h1>
      <h2>Register</h2>
      <div className='mainContent'>
        <div className='leftContent'>
          <form onSubmit={handleSubmit} className="loginForm">
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
          <p>Already have an account?{' '}<Link to='/login' className='link'>click here!</Link></p>
        </div>
        <div className='rightContent'>
          <img src={LoginPic} alt='Assorted items on a wooden table' className='loginPageImg' />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
  console.log('mSTP register', state);
  return{

  }
}

export default connect(mapStateToProps,{registerUser})(Register);