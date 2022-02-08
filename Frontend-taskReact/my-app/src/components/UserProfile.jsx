import './UserProfile.css'
import man2 from '../asset/img/man2.jpeg'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCallback } from 'react'
import Loaders from 'react-loading-icons'
import { useLocation } from 'react-router-dom'



const UserProfile = () => {

     const [loading, setLoading] = useState(true);
    const location = useLocation()
  const { contributors } = location.state;
     const [reposUrl, setRepo]= useState([])

  console.log(contributors, "****");

    const fetchContributors = useCallback(async () => {
           

            const repoResponse = await fetch(contributors.repos_url, {
                headers: {
                     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            const data = await repoResponse.json();
            // console.log('dddd', data)
        console.log('bb',data)
        setRepo(data)
      
         setLoading(false)
         }, [reposUrl]
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
                    <img className='profile-img' src={`${contributors.avatarUrl}`} alt="" />
                </div>

                <div className='profile-text'>
                    <h1 className='heading-name'>{`${contributors.name}`} </h1>
                    <p className='heading-username'>{`${contributors.login}`} </p>
                    <button className='btn btn-profile'>Follow</button>

                    <p>Followers: {`${+contributors.followers}`} </p>
                    <p>Contributions:{`${contributors.contribution}`} </p>
                    <p>Public repos:{`${contributors.public_repos}`} </p>
                    <p>Public gists:{`${contributors.public_gists}`} </p>

                </div>
            </div>

                {/* <h3 className='header-repo heading'>Popular repositories</h3> */}
            <div className='card-profile repo'>
                {reposUrl.length > 0 && reposUrl.map((repo) => (

                <div className='repositories'>
                    <Link to={`/repo/${repo.name}`} state={{repo}}className='card-repo'>
                        <div className='inner-repo'>
                            <p className='header-repo'>
                                {repo.name}
                            </p>
                            <div className='lang-repo'>
                                <p className='color-repo'></p>
                                <p>{repo.language}</p>
                            </div>
                        </div>
                        <p className='btn-repo'>Public</p>
                    </Link>
                </div>
                ))}

            </div>
        </section>
    )
}

export default UserProfile;