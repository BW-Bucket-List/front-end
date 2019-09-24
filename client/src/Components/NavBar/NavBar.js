import React from 'react';
import '../../scss/NavBar.scss';

function NavBar() {
    return (
        <div className='nav-page-section'>
              <div className='nav-links'>

                <div className='left-side-link'>
                  <Link to='/'>Bucket List</Link>
                </div>
              
                <div className='right-side-link'>
                  <Link to='/'>Home</Link>
                  <a href='#'>Your Bucket</a>
                  <a href='#'>About</a>
                </div>

              </div> {/* nav-links end */}
        </div> /* nav-page-section end */
    )
}


export default NavBar;