import React from 'react';
import '../scss/ProfilePage.scss'
import { Link } from 'react-router-dom';


function ProfilePage() {
    return (
        <div className='profile-page-section'>
              <div className='top-section-profile'>
                 <div className='profile-info'>
                        <p>Bikini Bottom, USA</p>
                        <img src='https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png/revision/latest?cb=20160507142128'></img>
                        <h1>Sponge Bob</h1>
                        <h2>Email: <span>BikiniBottom@underthesea.com</span></h2>
                        <h2>Bio: stuff and things</h2>
                        <button>Edit</button>
                 </div> {/* profile-info end */}
              </div> {/* top-section-profile end */}
        </div> /* profile-page-section end */
    )
}


export default ProfilePage;