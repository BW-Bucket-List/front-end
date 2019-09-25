import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import LoginPic from '../Images/LoginPic.jpg';
import '../scss/Register.scss';

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
    axiosWithAuth()
      .post('/auth/register',credentials)
      .then(res =>{
        localStorage.setItem('token', res.data.payload)
        props.history.push('')      
      })
  }

  return(
<div className='signUp-Main'>
    <div className='signUp-div'>

      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account!</p>

      <form onSubmit={handleSubmit} className='signUp-form'>

        <div className='access-inputs'>
            <div className='email'>
                <i class="fas fa-envelope"></i>
                <input className='signUp-input' type='email'  onChange={handleChange} name='email' value={credentials.email} placeholder='Email'></input>
            </div>
            <div className='username'>
                <i class="fas fa-user"></i>
                <input className='signUp-input' type='name' onChange={handleChange} name='username' value={credentials.username} placeholder='Username'></input>
             </div>
             <div className='password'>
                <i class="fas fa-lock"></i>
                <input className='signUp-input' type='password' onChange={handleChange} name='password' value={credentials.password} placeholder='Password'></input>
            </div>
        </div> {/* access-inputs end */}

        <div className='prev-user'>
            <p>Already have an account?{' '}<Link to='/login' className='a-tag-logIn' src='#'>Login here.</Link></p>
        </div>

        <div className='button-div'>
            <button className='signUp-button'>Register</button>
        </div>

      </form> {/* signUp-form end */}

    </div> {/* signUp-div end  */}

     <div className='form-image'>
          <img src='https://66.media.tumblr.com/57a304cbe239308bb1e7d13d7c4f978e/tumblr_o2n1ylyF7S1tsnmibo1_400.jpg'></img>
     </div>

</div> /* signUp-Main */
  )
}

export default Register;