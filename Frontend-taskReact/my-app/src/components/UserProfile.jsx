import './UserProfile.css'
import man2 from '../asset/img/man2.jpeg'
const UserProfile = () => {
    return (
        <section className='user-section'>
            <div className='card-profile'>

                <div className='profile'>
                    <img className='profile-img' src={man2} alt="" />

                </div>


            


                <div className='profile-text'>
                        <h1 className='heading-name'>John Doe</h1>
                        <p className='heading-username'>Jigman</p>
                <button className='btn btn-profile'>Follow</button>
            
                    <p>Full Stack Developer</p>
                    <p> Seattle, WA</p>

                </div>


             </div>





            <div className='card-profile repo'>
                <div className='card-repo'>
                    <p>GitHub Finder</p>
                    <button>Public</button>
                </div>


                <button>More</button>
            </div>


        </section>
    )
}

export default UserProfile