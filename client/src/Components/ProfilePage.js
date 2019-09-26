import React from 'react';
import '../scss/ProfilePage.scss'
// import { Link } from 'react-router-dom';


const ProfilePage = () => {
    return (
        <div className='profile-page-section'>
              <div className='top-section-profile'>
                 <div className='profile-info'>
                        <p>Bikini Bottom, USA</p>
                        {/* <h1></h1> */}
                        <h2>Email: <span>BikiniBottom@underthesea.com</span></h2>
                        <h2>Bio: stuff and things</h2>
                        <button>Edit</button>
                 </div> {/* profile-info end */}
              </div> {/* top-section-profile end */}
        </div> /* profile-page-section end */
    )
}


export default ProfilePage;