 
import '../styles/styles.css'


const ProfileCard = () => {
    const year = new Date().getFullYear();

    return(
        <>
            <div className="center profile-card">
                <div className='avatar'>
                    
                    <div className='outer-circle'>
                    </div>

                    <div className='inner-circle'>

                    </div>
                </div>

                <div className='social-links'>
                    <ul>
                        <li><a href="https://twitter.com"><i class="icon-twitter"></i></a></li>
                        <li><a href="https://facebook.com"><i class="icon-facebook"></i></a></li>
                        <li><a href="https://pinterest.com"><i class="icon-pinterest"></i></a></li>
                    </ul>
                </div>

                <div className='username'>
                    @ririborromeo
                </div>

                <div className='role'>
                    DEVELOPER
                </div>

            </div>
        
        </>

    )
}


export default ProfileCard;
