import React from 'react';
import '../scss/ProfilePage.scss'

function ProfilePage() {
    return (
        <div className='profile-page-section'>

              <div className='top-section-profile'>
                 <div className='profile-info'>
                        <p>Bikini Bottom, USA</p>
                        <img src='https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png/revision/latest?cb=20160507142128'></img>
                        <h1>Sponge Bob</h1>
                        <h2>Email: <span>BikiniBottom@underthesea.com</span></h2>
                        <h2>Status: <span>Public</span></h2>
                        <Link>
                        <button>View Bucket</button>
                        </Link>
                 </div> {/* profile-info end */}
              </div> {/* top-section-profile end */}

              <div className='middle-section-profile'>
                    <div>
                        <img src='https://thumbor.thedailymeal.com/0VkGEpj1uIjC4HbtcFZ-2sLcG4I=/774x516/https://www.theactivetimes.com/sites/default/files/story/2018/0-shutterstock_587134298.jpg'></img>
                    </div>
                    <div className='middle-section-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra odio eget diam feugiat, vitae finibus magna malesuada. Aliquam erat volutpat. Vivamus consectetur ante neque, sed ultrices augue interdum ac. Praesent et imperdiet sem. Sed pharetra magna id rutrum facilisis. Nullam lobortis erat ex, eu suscipit lectus euismod posuere. Duis.</p>
                    </div>
              </div> {/* middle-section-profile end */}

                 <div className='middle-section-profile2'>
                    <div className='middle-section-text2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra odio eget diam feugiat, vitae finibus magna malesuada. Aliquam erat volutpat. Vivamus consectetur ante neque, sed ultrices augue interdum ac. Praesent et imperdiet sem. Sed pharetra magna id rutrum facilisis. Nullam lobortis erat ex, eu suscipit lectus euismod posuere. Duis.</p>
                    </div>
                    <div>
                        <img src='https://www.graduatenursingedu.org/wp-content/uploads/2018/06/travel.jpg'></img>
                    </div>
              </div> {/* middle-section-profile2 end */}

              <div className='bottom-section-profile'>
                    <div className='box1'>
                        <i class="fas fa-plane"></i>
                        <h2>Vacation Planning</h2>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                    </div>
                    <div className='box1'>
                        <i class="fas fa-home"></i>
                        <h2>Vacation Planning</h2>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                    </div>
                    <div className='box1'>
                        <i class="far fa-smile"></i>
                        <h2>Vacation Planning</h2>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                    </div>
                    
              </div> {/* bottom-section-profile end */}

        </div> /* profile-page-section end */
    )
}


export default ProfilePage;