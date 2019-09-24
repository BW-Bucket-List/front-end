import React from 'react';
import '../scss/ProfilePage.scss'

function ProfilePage() {
    return (
        <div className='profile-page-section'>

              <div className='top-section-profile'>

                 <div className='profile-info'>
                        <img src='https://12s1o525xrgk2r8n1g2juoap-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Nora_Salamon-Toth.jpg'></img>
                        <h1>Name:</h1>
                        <h2>Email:</h2>
                        <h2>Private:</h2>
                 </div> {/* profile-info end */}

                 

              </div> {/* top-section-profile end */}

        </div> /* profile-page-section end */
    )
}


export default ProfilePage;