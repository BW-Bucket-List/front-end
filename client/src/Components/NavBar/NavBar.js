import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className='nav-page-section'>
              <div className='nav-links'>

                <div className='left-side-link'>
                  <a href='#'>Bucket List</a>
                </div>
              
                <div className='right-side-link'>
                  <a href='#'>Home</a>
                  <a href='#'>Your Bucket</a>
                  <a href='#'>About</a>
                </div>

              </div> {/* nav-links end */}
        </div> /* nav-page-section end */
    )
}


export default NavBar;