import React from 'react';
import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav-page-section'>
              <div className='nav-links'>

                <div className='left-side-link'>
                  <Link to='/'>Bucket List</Link>
                </div>
              
                <div className='right-side-link'>
                  <Link to='/'>Login</Link>
                  <Link to='/profile'>Profile</Link>
                  <Link to='/buckets'>My Buckets</Link>
                </div>

              </div> {/* nav-links end */}
        </div> /* nav-page-section end */
    )
}


export default NavBar;