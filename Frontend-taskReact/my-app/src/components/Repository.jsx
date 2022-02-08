import './Repository.css';
import man from '../asset/img/man.jpeg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import Loaders from 'react-loading-icons'
import { useLocation } from 'react-router-dom'

const Repository = () => {

  const [loading, setLoading] = useState(true);
    const location = useLocation()
  const {repo} = location.state;
     const [reposContributorUrl, setContributorRepo]= useState([])

     const fetchContributors = useCallback(async () => {
           

            const repoResponse = await fetch(repo.contributors_url, {
                headers: {
                     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            const data = await repoResponse.json();
            // console.log('dddd', data)
        console.log('bb',data)
        setContributorRepo(data)
      
         setLoading(false)
         }, [reposContributorUrl]
    )


 useEffect(() => {
        const getContributors = async () => {
            await fetchContributors()
        }

        getContributors()

    }, [])





    return (
        <section>

            <div className='repo-container'>
                <p className='repo-name'>{repo.name}/<span>{repo.name}</span></p>
                <p className='btn-repo name'>Public</p>
            </div>
               <div className='heading-primary'>
                <div className='heading-secondary'>
                    
                <button className='btn oned'>master</button>

                <button className='btn two'>Go to file</button>
                <button className='btn three'>Add file</button>
                <button className='btn four'>Code</button>
                 </div>

            </div>
                <h1 className='heading new'>Contributors</h1>
            <div className='repository-flex'>
                <div>

                    <div className='card-profile box'>
                        <div className='img-profile'>
                            <Link to={`/userprofile/${repo.owner.login}`}
                            state={{ repo }} > <img className="img-container boxed" src={`${repo.owner.avatar_url}`} alt="" /></Link>
                            <p><span>{`${repo.owner.login}`}</span> commits</p>
                        </div>

                    </div>




                </div>



                <div className='card-profile img '>
              
                 {reposContributorUrl.length > 0 && reposContributorUrl.map((repo) => (
                    <img className='img-container boxed' src={repo.avatar_url} alt="" />
                   
                   
                 ))}
                    
                   <a className='contributor-count' href="https://github.com/angular/angular/graphs/contributors">
                    <p>+ contributors</p></a>
                <p className='lang'>Languages</p>
                    <div className='lang-repo word'>
                    <p className='color-repo yellow'></p>
                        <p>Javascript</p>
                        <p className='color-repo blue '></p>
                        <p>Typescript</p>
                        <p className='color-repo purple'></p>
                        <p>CSS</p>
                        <p className='color-repo red'></p>
                        <p>HTML</p>
                        
                </div>
                </div>



                <div>




                </div>





            </div>


        </section>
    )
}

export default Repository;