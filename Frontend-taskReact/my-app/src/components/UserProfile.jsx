import './UserProfile.css'
import man2 from '../asset/img/man2.jpeg'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCallback } from 'react'
import Loaders from 'react-loading-icons'















const UserProfile = () => {
     const [angularOrg, setangularOrg] = useState([])
     const [loading, setLoading] = useState(true);

    const fetchContributors = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/orgs/Angular`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
         setangularOrg([data])

          const nextResponse = await fetch(`${process.env.REACT_APP_GITHUB_URL}/orgs/angular/repos?per_page=10`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
         const newData = await nextResponse.json()

            const nextNextResponse = await fetch(`${process.env.REACT_APP_GITHUB_URL}/repos/angular/angular.js/contributors`, {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })

            const resultData = await nextNextResponse.json();
        
        console.log('ccc', resultData)

        const repositories = resultData.map(async(element)=>{
            const repoResponse = await fetch(element.repos_url, {
                headers: {
                     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            return await repoResponse.json();
        })
        console.log('bb',repositories)

const allRepoContributors = await Promise.all(repositories)
console.log('iii', allRepoContributors)



 const ranks = {};

        allRepoContributors.forEach(repo => {
            repo.forEach(repositories => {
                if (!ranks[repositories.name]) {
                    ranks[repositories.name] = {
                        name: repositories.name,
                        avatarUrl: repositories.owner.avatar_url,
                        userUrl: repositories.url,
                        contributions: repositories.contributors_url,
                        followers: repositories.owner.followers_url,
                        gists: repositories.owner.gists_url

                    }
                } else {
                    ranks[repositories.name].contribution = ranks[repositories.name].contribution + repositories.contributions
                }
            })
        })
        console.log(Object.values(ranks)[0].userUrl)
        const userPromises = Object.values(ranks).map(async (user) => {
            const response = await fetch(user.userUrl, {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            return await response.json()
        });
        const allUser = await Promise.all(userPromises)
         allUser.forEach(user => {
            ranks[user.login] = { ...ranks[user.login], name: user.name, followers: user.followers, public_repos: user.public_repos, public_gists: user.public_gists }
        })



      
         setLoading(false)
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