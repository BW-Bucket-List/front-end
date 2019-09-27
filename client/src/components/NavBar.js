import React from 'react';
import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='Global-Navigation'>
              {/* <div className='nav-links'> */}

                <div className='left-side-link'>
                  <h1>Bucket List</h1>
                </div>
              
                <div className='right-side-link'>
                  <a href="https://bucket-list-kb.netlify.com/index.html/" className="HeaderLinks">Home</a>
                  <a href="https://bucket-list-kb.netlify.com/about.html" className="HeaderLinks">About Us</a>
                  <Link to='/' className="HeaderLinks">Login</Link>
                  <Link to='/profile' className="HeaderLinks">Profile</Link>
                  <Link to='/bucket' className="HeaderLinks">My Buckets</Link>
                </div>

              {/* </div> nav-links end */}
        </div> /* nav-page-section end */
    )
}

export default NavBar;