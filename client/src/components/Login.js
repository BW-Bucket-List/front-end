import React, {useState} from 'react';
// import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
// import LoginPic from '../Images/LoginPic.jpg';
import '../scss/Login.scss';
//import {connect} from 'react-redux';
import {loginUser} from '../actions';

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
    console.log('Do IT!');
    e.preventDefault();
    props.loginUser(credentials);
    props.history.push('')
  }

  return(
  <div className='logIn-Main'>
    <div className='logIn-div'>

                <h1>Log In</h1>
                <p>Please fill in this form to log into account!</p>

                <form onSubmit={handleSubmit}  className='logIn-form'>
                    <div className='access-logIn-inputs'>
                        <div className='username'>
                            <i className="fas fa-user"></i>
                            <input className='logIn-input' type='text' name='username' onChange={handleChange} value={credentials.username} placeholder='Username'></input>
                         </div>
                         <div className='password'>
                            <i className="fas fa-lock"></i>
                            <input className='logIn-input' type='password' name='password' onChange={handleChange} value={credentials.password}  placeholder='Password'></input>
                        </div>
                    </div> {/* access-logIn-inputs end */}

                    <div className='none-user'>
                        <p>Not registered?{' '}<Link to='/register' className='a-tag-logIn' src='#'>Sign up here</Link></p>
                    </div>

                    <div className='button-div2'>
                        <button className='signUp-button'>Log In</button>
                    </div>
                </form> {/* logIn-form end */}

        </div> {/* logIn-div end  */}

                <div className='form-image'>
                    <img src='https://66.media.tumblr.com/57a304cbe239308bb1e7d13d7c4f978e/tumblr_o2n1ylyF7S1tsnmibo1_400.jpg' alt='vacation items'></img>
                </div>

    </div>
  )
}

const mapStateToProps = state =>{
  console.log('mSTP login', state);
  return{

  }
}

// export default connect(mapStateToProps,{loginUser})(Login);

export default Login;