import './UserProfile.css'
import man2 from '../asset/img/man2.jpeg'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCallback } from 'react'















const UserProfile = () => {
     const [angularOrg, setangularOrg] = useState([])
    const fetchContributors = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/orgs/Angular`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        console.log(data)
         setangularOrg([data])
      console.log(angularOrg)

         }, [angularOrg]
    )

       useEffect(() => {
        const getContributors = async () => {
            await fetchContributors()
        }

        getContributors()

    }, [])
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
                <h3 className='header-repo heading'>Popular repositories</h3>
                <div className='repositories'>

                    <Link to="/repo" className='card-repo'>
                        <div className='inner-repo'>

                            <p className='header-repo'>GitHub finder</p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </Link>

                    <div className='card-repo'>
                        <div className='inner-repo'>

                            <p className='header-repo'>GitHub finder</p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </div>

                    <div className='card-repo'>
                        <div className='inner-repo'>

                            <p className='header-repo'>GitHub finder</p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </div>

                    <div className='card-repo'>
                        <div className='inner-repo'>

                            <p className='header-repo'>GitHub finder</p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </div>
                    <div className='card-repo'>
                        <div className='inner-repo'>

                            <p className='header-repo'>GitHub finder</p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </div>
                    <div className='card-repo'>
                        <div className='inner-repo'>

                            <p className='header-repo'>GitHub finder</p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </div>

                    <button className='btn'>More</button>
                </div>
            </div>


        </section>
    )
}

export default UserProfile;