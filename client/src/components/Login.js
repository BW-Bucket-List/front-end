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
    <div className='signUp-Main'>
    <div className='signUp-div'>

      <h1>Log In</h1>
      <p>Please fill in this form to log into account!</p>

      <form onSubmit={handleSubmit} className='signUp-form'>

        <div id='first-Input' className='access-inputs'>
            <div className='username'>
                <i className="fas fa-user"></i>
                <input className='signUp-input' type='name' onChange={handleChange} name='username' value={credentials.username} placeholder='Username'></input>
             </div>
             <div className='password'>
                <i className="fas fa-lock"></i>
                <input className='signUp-input' type='password' onChange={handleChange} name='password' value={credentials.password} placeholder='Password'></input>
            </div>
        </div> {/* access-inputs end */}

        <div className='prev-user'>
        <p>Not registered? <Link to='/register' className='a-tag-logIn'>Sign up here.</Link></p>
        </div>

        <div className='button-div'>
            <button className='signUp-button'>Log In</button>
        </div>

      </form> {/* signUp-form end */}

    </div> {/* signUp-div end  */}

     <div className='form-image'>
          <img src='https://66.media.tumblr.com/57a304cbe239308bb1e7d13d7c4f978e/tumblr_o2n1ylyF7S1tsnmibo1_400.jpg' alt='vacation items'></img>
     </div>

</div> /* signUp-Main */
  )
}

const mapStateToProps = state =>{
  console.log('mSTP login', state);
  return{

  }
}

// export default connect(mapStateToProps,{loginUser})(Login);

export default Login;